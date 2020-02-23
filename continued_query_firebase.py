#!/bin/python3.7

import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import requests
import pandas as pd 

URL='https://pearlhacks2020.firebaseio.com/'
#URL_json='https://pearlhacks2020.firebaseio.com.json'

cred = credentials.Certificate('/Users/julieragsdale/Desktop/PearlsHacks2020/pearlhacks2020-firebase-adminsdk-ytwxu-a6264b4acf.json')

default_app=firebase_admin.initialize_app(cred, {
    'databaseURL': URL
})

ref = db.reference()

#print(type(ref.get()))

json=ref.get()

disaster_list=['earthquake','flood','hurricane','storm','fire','tornado']
#disaster_text_dict=dict()

#for disaster in disaster_list:
#    disaster_text_dict[disaster]=[]
            #print(value)

json2=json

for message_id, dictionary in json2.items():
    json2[message_id]['Tag']=[]

for message_id, dictionary in json.items():
    for key, value in dictionary.items():
        if key== 'Text':
            for disaster in disaster_list:
                if disaster in value:
                    #json2[message_id]['tag']= ''
                    json2[message_id]['Tag'].append(disaster)
                    #disaster_text_dict[disaster].append([message_id, dictionary])   

print(json2)

child_ref = ref.child('copy')

child_ref.update(json2)
#print(disaster_text_dict)

#MATCHING 





#r= requests.post(url='https://pearlhacks2020.firebaseio.com',data=data).json
#print(r)
#print(response.json())#['messages'])
#db= firebase.database()
##print(type(firebase))
#result = firebase.get('/users', None)
#print(result)





