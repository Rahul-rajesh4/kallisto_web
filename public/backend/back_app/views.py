from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *
from django.core.mail import send_mail
from django.utils import timezone
import datetime
import time


class Registerapi(GenericAPIView):
    serializer_class=loginSerializer
    serializer_class_reg=registerSerializer
    def post(self,request):
        name=request.data.get('name')
        contact=request.data.get('contact')
        email=request.data.get('email')
        password=request.data.get('password')
        address=request.data.get('address')
        role='user'
        log_id=''
        if(login.objects.filter(email=email)):
            return Response({'message':'duplicate username found'},status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class(data={'email':email,'password':password,'role':role})
        if serializer_login.is_valid():
            log=serializer_login.save()
            log_id=log.id
        serializer_reg=self.serializer_class_reg(data={'name':name,'contact':contact,'log_id':log_id,'address':address})
        if serializer_reg.is_valid():
             serializer_reg.save()
             return Response({'data':serializer_reg.data,'message':'Registered success','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer_reg.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)
        

class loginAPI(GenericAPIView):
    serializer_class=loginSerializer
    def post(self,request):
        email=request.data.get('email')
        password=request.data.get('password')
        logreg=login.objects.filter(email=email,password=password)
        if (logreg.count()>0):
            serializer=loginSerializer(logreg,many=True)
            for i in serializer.data:
                l_id=i['id']
                role=i['role']
            regdata=UserRegister.objects.all().filter(log_id=l_id).values()
            for i in regdata:
                user_id=i['id']
            return Response({'data':{'email':email,'log_id':l_id,'role':role,'user_id':user_id},'message':'success','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':'invalid credentials','success':False},status=status.HTTP_400_BAD_REQUEST)



# class AddProduct(GenericAPIView):
#     serializer_class=productSerializer
#     serilizer_count=productsize

#     def post(self,request):
#         name=request.data.get('name')
#         category=request.data.get('category')
#         gender=request.data.get('gender')
#         actualprice=request.data.get('actualprice')
#         discountprice=request.data.get('discountprice')
#         description=request.data.get('description')
#         size=request.data.get('size')
#         Imagesone = request.data.get('Imagesone')
#         Imagestwo = request.data.get('Imagestwo')
#         Imagesthree = request.data.get('Imagesthree')
#         Imagesfour = request.data.get('Imagesfour')
#         # count=request.data.get('count')
#         # sizze=productsize.objects.get('')
#         serializer = self.serializer_class(data={'name':name,'category':category,'gender':gender,'actualprice':actualprice,'discountprice':discountprice,'description':description,'size':size,'Imagesone':Imagesone,'Imagestwo':Imagestwo,'Imagesthree':Imagesthree,'Imagesfour':Imagesfour})
        


#         if serializer.is_valid():
#             serializer.save()

#         else:
#             print(f"Serializer errors: {serializer.errors}")
            
#         return Response({'data': serializer.errors, 'message': 'Failed', 'success': False},
#                         status=status.HTTP_400_BAD_REQUEST)


class filtermethod(GenericAPIView):
    serializer_class=productSerializer
    def post(self,request):
        category=request.data.get('category')
        gender=request.data.get('gender')
        # print(gender,'----7777777')
        if category:
         result=Products.objects.filter(category=category,gender=gender)
        else:
         result=Products.objects.filter(gender=gender)

        datas=self.serializer_class(data=result,many=True)
        # print(datas,'---------')
        if datas.is_valid():
         datas.save()
        return Response({'data':datas.data,'message':'success'})
     

class getSingleproduct(GenericAPIView):
    serializer_class=productSerializer
    serializer_class_size=SizeSerializer
    def get(self,request,id):
        prodata=Products.objects.get(id=id)
        # print(prodata,'------e5')
        newdata=self.serializer_class(prodata)
        # print(newdata,'========new')
        size=productsize.objects.filter(pro_name=prodata)
        sizedata=self.serializer_class_size(size,many=True)
        # print(size,'///////////////////')
        return Response({'data':newdata.data,'data2':sizedata.data})


class getcartdetails(GenericAPIView):
    serializer_class=cartSerializer
    def post(self,request):
        size=request.data.get('selectedSize')
        log_id=request.data.get('log_id')
        product_name=request.data.get('product_name')
        try:
           product_exists = cart.objects.filter(product_name=product_name, log_id=log_id).exists()
           print(product_exists,'dhdhhdhdhd///////////////////////')
           if product_exists:
              if size :
                  product=cart.objects.filter(product_name=product_name, log_id=log_id)
                #   print(product.values(),'size//////////////////////')
                  for i in product:
                      if i.size == size:
                        return Response({'response':'already added'})
                      i.size=size
                      i.save()
                      print(i.size,'//////////////////////')
                      return Response({'response':'updated'})
              return Response({'response':'already added'})
        except:
            pass
        serializer=self.serializer_class(data={'product_name':product_name,'size':size,'log_id':log_id})
        if serializer.is_valid():
            serializer.save()
        # print(size)
        # print(log_id)
        # print(product_name)
        return Response({'data':serializer.data,'suceess':'success'})
    


class carditailsshow(GenericAPIView):
    serializer_class = cartSerializer
    serializer_class_product = productSerializer

    def get(self, request, id):
        pro = []
        cart_data = cart.objects.filter(log_id=id)
        
        for cart_item in cart_data:
            products = Products.objects.filter(name=cart_item.product_name)  # Replace 'name' with the appropriate field
            pro.extend(products)
        
        if cart_data.exists():
            serializer = self.serializer_class(cart_data, many=True)
        else:
            serializer = None
        
        if pro:
            serializer_pro = self.serializer_class_product(pro, many=True)
        else:
            serializer_pro = None
        
        return Response({
            'data': serializer.data if serializer else [],
            'product': serializer_pro.data if serializer_pro else [],
            'success': 'success' if serializer else 'No data found'
        })

class deleteFromcart(GenericAPIView):
    serializer_class = cartSerializer
    def post(self,request,id):
        name=request.data.get('name')
        data=cart.objects.filter(product_name=name,log_id=id)
        data.delete()
        # serializer=self.serializer_class(data,many=True)
        # print(serializer)
        return Response({'suceess':'success'})

class addToFavarourites(GenericAPIView):
    serializer_class=favouritetSerializer
    def post(self,request):
        name=request.data.get('name')
        log_id=request.data.get('log_id')
        try:
           fav_exists = favourite.objects.filter(product_name=name, log_id=log_id).exists()
           if fav_exists:
              return Response({'suceess':'warn','response':'already added'})
        except:
            pass
        serializer=self.serializer_class(data={'product_name':name,'log_id':log_id})
        if serializer.is_valid():
            serializer.save()
   
        return Response({'data':serializer.data,'suceess':'success'})
    


class favshow(GenericAPIView):
    serializer_class = favouritetSerializer
    serializer_class_product = productSerializer

    def get(self, request, id):
        pro = []
        fav_data = favourite.objects.filter(log_id=id)
        
        for cart_item in fav_data:
            products = Products.objects.filter(name=cart_item.product_name)  # Replace 'name' with the appropriate field
            pro.extend(products)
        
        if fav_data.exists():
            serializer = self.serializer_class(fav_data, many=True)
        else:
            serializer = None
        
        if pro:
            serializer_pro = self.serializer_class_product(pro, many=True)
        else:
            serializer_pro = None
        
        return Response({
            'data': serializer.data if serializer else [],
            'product': serializer_pro.data if serializer_pro else [],
            'success': 'success' if serializer else 'No data found'
        })

class faveRemove(GenericAPIView):
    serializer_class = favouritetSerializer
    def post(self,request,id):
        name=request.data.get('name')
        data=favourite.objects.filter(product_name=name,log_id=id)
        data.delete()
        # serializer=self.serializer_class(data,many=True)
        # print(serializer)
        return Response({'suceess':'success'})
    
class bookProduct(GenericAPIView):
    serializer_class=orderSerializer
    def post(self,request,id):
        array=request.data.get('array')
        array2=request.data.get('array2')
        user=UserRegister.objects.get(log_id=id)
        logindata=login.objects.get(id=id)
        # print(array,'///////////////')
        name=user.name
        contact=user.contact
        address=user.address
        email=logindata.email
        log_id=id
        # time.sleep(2)
        for i in array:
            current_time = timezone.now()  # Current time in UTC
            order_id = current_time.strftime("%Y%m%d%H%M%S%f")+str(id)
            # print(order_id)
            product_id=i['id']
            product_name=i['name']
            category=i['category']
            gender=i['gender']
            price=i['discountprice']
            p=Products.objects.get(id=product_id).Imagesone
            print(p,'//////////////////')
            for j in array2:
                if j['product_name'] == i['name']:
                    size=j['size']
                    # print(size)
                    serializer=self.serializer_class(data={'order_id':order_id,'user_name':name,'email':email,'contact':contact,'address':address,
                    'product_name':product_name,'price':price,'category':category,'gender':gender,"selectedSize":size,'Status':'placed',
                    'product_id':product_id,'log_id':log_id,'image':p})
                    if serializer.is_valid():
                        email_subject = 'Order placed'
                        email_message = (
                            f'Hi {name},\n\n'
                            f'Thank you for your order!\n\n'
                            f'your order id for {product_name}: {order_id}\n\n'
                            f'We have received your order and it is being processed.\n\n'
                            f'If you have any questions regarding your order, feel free to contact us.\n\n'
                            f'Thanks,\n\n'
                            f'Best Regards,\n'
                            f'Kallisto Team'
                        )
                        send_mail(
                        email_subject,
                        email_message,
                        'rahulrajesh617@gmail.com',
                        [email],     #//user mail
                        fail_silently=False,
                         )
                        email_message2 = (
                            f'Hi Kallisto,\n\n'
                            f'Theres a new  order!\n\n'
                            f'order id for {product_name}: {order_id}\n\n'
                            f'Thanks,\n\n'
                            f'Best Regards\n,'
                            f'Kallisto Team'
                        )
                        send_mail(
                        email_subject,
                        email_message2,
                        'rahulrajesh617@gmail.com',
                        ['rahulrajeshh4@gmail.com'],     #///admin
                        fail_silently=False,
                         )
                        data=cart.objects.filter(log_id=id)
                        data.delete()
                        serializer.save()
                        # print('1////////////////////////')
                        # time.sleep(5)
        print('haloo')
        return Response({'suceess':'success'})

class getorder(GenericAPIView):
    serializer_class=orderSerializer
    def get(self,request,id):
        print(id)
        orderData=order.objects.filter(log_id=id)
        serializer = self.serializer_class(orderData, many=True)
        return Response({'data':serializer.data if serializer else [],'suceess':'success'})
    

class cancelorder(GenericAPIView):
    serializer_class=orderSerializer
    def get(self,request,id):
        orderData=order.objects.get(order_id=id)
        orderData.Status='canceled'
        orderData.save()
        serializer = self.serializer_class(orderData)
        return Response({'data':serializer.data,'suceess':'success'})
