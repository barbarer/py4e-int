Application Programming Interfaces
----------------------------------

We now have the ability to exchange data between applications using
HyperText Transport Protocol (HTTP) and a way to represent complex data
that we are sending back and forth between these applications using
eXtensible Markup Language (XML) or JavaScript Object Notation (JSON).

The next step is to begin to define and document "contracts" between
applications using these techniques. The general name for these
application-to-application contracts is *Application Program
Interfaces* (APIs). When we use an API, generally one program
makes a set of *services* available for use by other
applications and publishes the APIs (i.e., the "rules") that must be
followed to access the services provided by the program.

When we begin to build our programs where the functionality of our
program includes access to services provided by other programs, we call
the approach a *Service-oriented architecture* (SOA). A
SOA approach is one where our overall application makes use of the
services of other applications. A non-SOA approach is where the
application is a single standalone application which contains all of the
code necessary to implement the application.

We see many examples of SOA when we use the web. We can go to a single
web site and book air travel, hotels, and automobiles all from a single
site. The data for hotels is not stored on the airline computers.
Instead, the airline computers contact the services on the hotel
computers and retrieve the hotel data and present it to the user. When
the user agrees to make a hotel reservation using the airline site, the
airline site uses another web service on the hotel systems to actually
make the reservation. And when it comes time to charge your credit card
for the whole transaction, still other computers become involved in the
process.

.. image:: height=3.0in@../images/soa
   :target: height=3.0in@../images/soa
   :alt: Service-oriented architecture



A Service-oriented architecture has many advantages, including: (1) we
always maintain only one copy of data (this is particularly important
for things like hotel reservations where we do not want to over-commit)
and (2) the owners of the data can set the rules about the use of their
data. With these advantages, an SOA system must be carefully designed to
have good performance and meet the user's needs.

When an application makes a set of services in its API available over
the web, we call these *web services*.
