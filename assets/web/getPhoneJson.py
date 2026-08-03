import json
import os

def read_json(file):

    try:
        source_dir = os.path.dirname(__file__) #<-- directory name
        print(source_dir)
        full_path = os.path.join(source_dir, file)
        print(full_path)
        file = open(full_path, 'r') # Try to read the data from the file
        contents = file.read()               # If it's there, get it into a string
        dict = json.loads(contents)          # And then load it into a dictionary
        file.close()                         # Close the file, we're good, we got the data
    except:
        print("error when reading from file")
        dict = {}
    return dict

def printOfficePhone(dict):

    # if we read anything
    if len(dict) > 0:

        # get phone list
        phone_list = dict.get("phoneNumbers", None)

        # if found
        found = False
        if phone_list != None:
         
            # find office phone number
            for phone_dict in phone_list:
                type = phone_dict.get("type")
                if type == "office":
                    print("The office phone is {}".format(phone_dict.get("number")))
                    found = True
        
        if not found:
            print("No office phone number found")

def main():
    dict = read_json('person.json')
    printOfficePhone(dict)

    dict = read_json('person2.json')
    printOfficePhone(dict)

if __name__ == "__main__":
    main()





    
