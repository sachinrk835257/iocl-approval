from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    title = '''IOCL - Approval'''
    print("I am here")
    if request.method=='POST':
        sub = request.POST.get('subject')
        location = request.POST.get('location') 
        item = request.POST.get('item')
        justify1 = request.POST.get('justify1') 
        justify2 = request.POST.get('justify2')
        namevendor = request.POST.get('nameVendor') 
        cost = request.POST.get('cost')
        sap = request.POST.get('sap')  
        date = request.POST.get('date')  
        print(sub,location,item,justify1,justify2,namevendor,cost,sap,date)
    return render(request,'index.html',{"title":title})