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

json2=ref.get()

disaster_list=['earthquake','flood','hurricane','storm','fire','tornado']
#disaster_text_dict=dict()

#for disaster in disaster_list:
#    disaster_text_dict[disaster]=[]
            #print(value)

json3=json2

for message_id, dictionary in json2.items():
    json3[message_id]['Tag']=[]
    json3[message_id]['Severity']=''

for message_id, dictionary in json2.items():
    for key, value in dictionary.items():
        if key== 'Text':
            if 'Help' in value:
                json3[message_id]['Severity']='high'
            if 'know' in value:
                json3[message_id]['Severity']='medium'
            for disaster in disaster_list:
                if disaster in value:
                    #json2[message_id]['tag']= ''
                    json3[message_id]['Tag'].append(disaster)
                    #disaster_text_dict[disaster].append([message_id, dictionary])   

print(json3)

child_ref = ref.child('copy')

child_ref.update(json3)

with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(json3, f, ensure_ascii=False, indent=4)
#print(disaster_text_dict)

df=pd.read_json(r'data.json')
df.to_csv(r"pearlhaxx2020.csv")


#MATCHING 





#r= requests.post(url='https://pearlhacks2020.firebaseio.com',data=data).json
#print(r)
#print(response.json())#['messages'])
#db= firebase.database()
##print(type(firebase))
#result = firebase.get('/users', None)
#print(result)





