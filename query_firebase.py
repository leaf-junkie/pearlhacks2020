#!/bin/python3.7

import json
#import pyrebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import requests
#from firebase import firebase
#from firebase import firebase
import pandas as pd 

URL='https://pearlhacks2020.firebaseio.com/'
#URL_json='https://pearlhacks2020.firebaseio.com.json'

cred = credentials.Certificate('/Users/julieragsdale/Desktop/PearlsHacks2020/pearlhacks2020-firebase-adminsdk-ytwxu-a6264b4acf.json')

default_app=firebase_admin.initialize_app(cred, {
    'databaseURL': URL
})

ref = db.reference()

print(ref.get())


#response = requests.get(URL)
#print(response.status_code)
#print(response)

#source_code = ''' 
#print("Hello, world!") 
#a = 1 
#b = 2 
#print(a + b) 
#'''

#data= {'messages2':'second message'}
#data = {'api_option':'paste', 
#        'api_paste_code':source_code, 
#       'api_paste_format':'python'} 

#r= requests.post(url='https://pearlhacks2020.firebaseio.com',data=data).json
#print(r)
#print(response.json())#['messages'])
#db= firebase.database()
##print(type(firebase))
#result = firebase.get('/users', None)
#print(result)





