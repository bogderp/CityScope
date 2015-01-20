#1/17/15
#MHacksV
#Pulling coordinate data from Google's API for use in Google's Places API

 
file = open("CountiesAndStates.csv","r")
list1 = []

for line in file:
    pair = line.split(",")
    list1.append(pair)

#for pair in list1:
#    print(pair)

i=0
target=43
printfile=open('./commandlinecodes', 'w+')

while target<=len(list1):
    url = ''
    while i<target:
        url+='curl -O https://maps.googleapis.com/maps/api/geocode/json?address='+list1[i][0]+','+list1[i][1]+''
        i = i+1
    printfile.write(url)
    target = target+100


