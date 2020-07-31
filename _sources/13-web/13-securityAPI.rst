Security and API usage
----------------------

\index{OAuth}
\index{API!key}

It is quite common that you need an API key to make use of a
vendor's API. The general idea is that they want to know who is using
their services and how much each user is using. Perhaps they have free
and pay tiers of their services or have a policy that limits the number
of requests that a single individual can make during a particular time
period.

Sometimes once you get your API key, you simply include the key as part
of POST data or perhaps as a parameter on the URL when calling the API.

Other times, the vendor wants increased assurance of the source of the
requests and so they expect you to send cryptographically signed
messages using shared keys and secrets. A very common technology that is
used to sign requests over the Internet is called
*OAuth*. You can read more about the OAuth protocol at
`www.oauth.net <http://www.oauth.net>`_.

Thankfully there are a number of convenient
and free OAuth libraries so you can avoid writing an OAuth
implementation from scratch by reading the specification. These
libraries are of varying complexity and have varying degrees of
richness. The OAuth web site has information about various OAuth
libraries.
