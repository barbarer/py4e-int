Computer hardware architecture
------------------------------
.. index::
    single: Hardware
    pair: Hardware; Architecture
    single: Program
    single: Central Processing Unit
    single: Main Memory
    single: Secondary Memory
    single: Input and Output Devices
    single: Network Connection

Before we start learning the language we speak to give instructions to
computers to develop software, we need to learn a small amount about how
computers are built. If you were to take apart your computer or cell
phone and look deep inside, you would find the following parts:

.. figure:: Figures/arch.svg
    :alt: Hardware Architecture


The high-level definitions of these parts are as follows:


*
  The *Central Processing Unit* (or CPU) is the part of
  the computer that is built to be obsessed with "what is next?" If
  your computer is rated at 3.0 Gigahertz, it means that the CPU will
  ask "What next?" three billion times per second. You are going to
  have to learn how to talk fast to keep up with the CPU.

*
  The *Main Memory* is used to store information that
  the CPU needs in a hurry. The main memory is nearly as fast as the
  CPU. But the information stored in the main memory vanishes when the
  computer is turned off.

*
  The *Secondary Memory* is also used to store
  information, but it is much slower than the main memory. The
  advantage of the secondary memory is that it can store information
  even when there is no power to the computer. Examples of secondary
  memory are disk drives or flash memory (typically found in USB
  sticks and portable music players).

*
  The *Input and Output Devices* are simply our screen,
  keyboard, mouse, microphone, speaker, touchpad, etc. They are all of
  the ways we interact with the computer.

*
  These days, most computers also have a *Network
  Connection* to retrieve information over a network. We can
  think of the network as a very slow place to store and retrieve data
  that might not always be "up". So in a sense, the network is a
  slower and at times unreliable form of *Secondary
  Memory*.

.. mchoice:: intro-hardware-mc-storage
    :practice: T
    :answer_a: Main Memory
    :answer_b: Secondary Memory
    :answer_c: Central Processing Unit
    :answer_d: Input Devices
    :correct: b
    :feedback_a: Information stored in the main memory vanishes when the computer is turned off.
    :feedback_b: Correct! The secondary memory will hod information without power.
    :feedback_c: Try again! The CPU is what does the computing.
    :feedback_d: Try again! Input devices are other physical hardwares.

    Which of the following will keep information stored without a power source?

While most of the detail of how these components work is best left to
computer builders, it helps to have some terminology so we can talk
about these different parts as we write our programs.

As a programmer, your job is to use and orchestrate each of these
resources to solve the problem that you need to solve and analyze the
data you get from the solution. As a programmer you will mostly be
"talking" to the CPU and telling it what to do next. Sometimes you will
tell the CPU to use the main memory, secondary memory, network, or the
input/output devices.


.. figure:: Figures/arch2.svg
    :alt: Where Are You?


You need to be the person who answers the CPU's "What next?" question.
But it would be very uncomfortable to shrink you down to 5mm tall and
insert you into the computer just so you could issue a command three
billion times per second. So instead, you must write down your
instructions in advance. We call these stored instructions a
*program* and the act of writing these instructions down
and getting the instructions to be correct *programming*.


.. fillintheblank:: intro-hardware-fitb-program
    :practice: T

    A set of stored instructions used to direct your computer's central processing unit is called a ________.

    - :[Pp]rogram: A program holds the instructions that answer the CPU's "What next" question.
      :[Pp]rogramming: Programming is the process of creating and editing these instructions.
      :.*: Try again!

.. dragndrop:: intro-hardware-dnd-memory
    :practice: T
    :feedback: How is memory stored?
    :match_1: Main Memory|||Stores information quickly for the CPU; needs power for storage.
    :match_2: Secondary Memory|||Stores information slowly; can save information without power.
    :match_3: Input/Output Devices|||Physical aspects beyond the internal computer.
    :match_4: Network Connection|||Allows information to be stored on a network; very slow.
    :match_5: Central Processing Unit|||Does the actual computing and executing of programs in the computer.

    Match each term with its definition.
