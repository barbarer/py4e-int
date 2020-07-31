Security and API usage
----------------------
.. index::
    single: OAuth
    pair: Key; API

It is quite common that you need an API key to make use of a
vendor's API. The general idea is that they want to know who is using
their services and how much each user is using. Perhaps they have free
and pay tiers of their services or have a policy that limits the number
of requests that a single individual can make during a particular time
period.

Sometimes once you get your API key, you simply include the key as part
of POST data or perhaps as a parameter on the URL when calling the API.

.. fillintheblank:: webSecurity_fill1
    :practice: T

    An API ____ is typically needed to use and access an API with the vendor's services.

    - :[Kk]ey: An API key can be a parameter in the URL when calling the API or part of POST data.
      :.*: Try again. What would you need if access to the API is considered to be "locked"?

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

.. mchoice:: webSecurity_MC_OAuth
    :answer_a: OAuth is used to access libraries with information.
    :answer_b: OAuth is used to provide API keys.
    :answer_c: OAuth is used to find prewritten code.
    :answer_d: OAuth is used to sign requests over the Internet.
    :correct: d
    :feedback_a: OAuth could be used to authorize an account's access to a library, but it can be used for many other websites/services.
    :feedback_b: OAuth does not provide API keys.
    :feedback_c: OAuth is a security framework, but there are some libraries of prewritten code <b>for</b> OAuth so that you don't need to write your own.
    :feedback_d: OAuth is an authorization source that is used to sign requests over the Internet. 

    OAuth is a technology used to ________?
