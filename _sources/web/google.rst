Application 1: Google geocoding web service
-------------------------------------------
.. warning::  The Google API requires an account created with a credit card number, though it is free to use up to a certain number of requests. 


Google has an excellent web service that allows us to make use of their
large database of geographic information. We can submit a geographical
search string like "Ann Arbor, MI" to their geocoding API and have
Google return its best guess as to where on a map we might find our
search string and tell us about the landmarks nearby.

The geocoding service is free but rate limited so you cannot make
unlimited use of the API in a commercial application. But if you have
some survey data where an end user has entered a location in a
free-format input box, you can use this API to clean up your data quite
nicely.

*When you are using a free API like Google's geocoding API, you
need to be respectful in your use of these resources. If too many people
abuse the service, Google might drop or significantly curtail its free
service.*

You can read the online documentation for this service, but it is quite
simple and you can even test it using a browser by typing the following
URL into your browser:

`http://maps.googleapis.com/maps/api/geocode/json?address=Ann+Arbor%2C+MI <http://maps.googleapis.com/maps/api/geocode/json?address=Ann+Arbor%2C+MI>`_

Make sure to unwrap the URL and remove any spaces from the URL before
pasting it into your browser.

The following is a simple application to prompt the user for a search
string, call the Google geocoding API, and extract information from the
returned JSON.

.. code-block::

    import urllib.request, urllib.parse, urllib.error
    import json
    import ssl

    api_key = False
    # If you have a Google Places API key, enter it here
    # api_key = 'AIzaSy___IDByT70'
    # https://developers.google.com/maps/documentation/geocoding/intro

    if api_key is False:
        api_key = 42
        serviceurl = 'http://py4e-data.dr-chuck.net/json?'
    else :
        serviceurl = 'https://maps.googleapis.com/maps/api/geocode/json?'

    # Ignore SSL certificate errors
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    while True:
        address = input('Enter location: ')
        if len(address) < 1: break

        parms = dict()
        parms['address'] = address
        if api_key is not False: parms['key'] = api_key
        url = serviceurl + urllib.parse.urlencode(parms)

        print('Retrieving', url)
        uh = urllib.request.urlopen(url, context=ctx)
        data = uh.read().decode()
        print('Retrieved', len(data), 'characters')

        try:
            js = json.loads(data)
        except:
            js = None

        if not js or 'status' not in js or js['status'] != 'OK':
            print('==== Failure To Retrieve ====')
            print(data)
            continue

        print(json.dumps(js, indent=4))

        lat = js['results'][0]['geometry']['location']['lat']
        lng = js['results'][0]['geometry']['location']['lng']
        print('lat', lat, 'lng', lng)
        location = js['results'][0]['formatted_address']
        print(location)

The program takes the search string and constructs a URL with the search
string as a properly encoded parameter and then uses
``urllib`` to retrieve the text from the Google geocoding
API. Unlike a fixed web page, the data we get depends on the parameters
we send and the geographical data stored in Google's servers.

Once we retrieve the JSON data, we parse it with the
``json`` library and do a few checks to make sure that we
received good data, then extract the information that we are looking
for.

The output of the program is as follows (some of the returned JSON has
been removed):

.. code-block::

    $ python3 geojson.py
    Enter location: Ann Arbor, MI
    Retrieving http://maps.googleapis.com/maps/api/
      geocode/json?address=Ann+Arbor%2C+MI
    Retrieved 1669 characters


.. code-block:: {.json}

   {
     "status": "OK",
     "results": [
       {
         "geometry": {
           "location_type": "APPROXIMATE",
           "location": {
             "lat": 42.2808256,
             "lng": -83.7430378
           }
         },
         "address_components": [
           {
             "long_name": "Ann Arbor",
             "types": [
               "locality",
               "political"
             ],
             "short_name": "Ann Arbor"
           }
         ],
         "formatted_address": "Ann Arbor, MI, USA",
         "types": [
           "locality",
           "political"
         ]
       }
     ]
   }
   lat 42.2808256 lng -83.7430378
   Ann Arbor, MI, USA


.. code-block::

   Enter location:


You can download
`www.py4e.com/code3/geoxml.py <http://www.py4e.com/code3/geoxml.py>`_ to
explore the XML variant of the Google geocoding API.

As an exercise you can change either
`\ **geojson.py** <http://www.py4e.com/code3/geojson.py>`_ **or**
`\ **geoxml.py** <http://www.py4e.com/code3/geoxml.py>`_
to print out the two-character country code from the retrieved data.
Add error checking so your program does not traceback if the country
code is not there. Once you have it working, search for
"Atlantic Ocean" and make sure it can handle locations
that are not in any country.
