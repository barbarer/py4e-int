Persistence
-----------
..	index::
	single: Secondary Memory
	single: Primary Memory

So far, we have learned how to write programs and communicate our
intentions to the *Central Processing Unit* using
conditional execution, functions, and iterations. We have learned how to
create and use data structures in the *Main Memory*. The
CPU and memory are where our software works and runs. It is where all of
the "thinking" happens.

.. mchoice:: file-persistence-mc-software
    :practice: T
    :multiple_answers:
    :answer_a: Central Processing Unit
    :answer_b: Input Devices
    :answer_c: Memory
    :answer_d: Network
    :correct: a,c
    :feedback_a: The CPU runs the software in conjunction will memory sources.
    :feedback_b: Input devices supplement the software and other hardware.
    :feedback_c: Memory sources run the software in conjunction will the CPU.
    :feedback_d: The network does not run software.

    Where does the software work/run on a device? Select all that apply.

But if you recall from our hardware architecture discussions, once the
power is turned off, anything stored in either the CPU or main memory is
erased. So up to now, our programs have just been transient fun
exercises to learn Python.

.. figure:: ../images/arch.svg
    :alt: Secondary Memory

In this chapter, we start to work with *Secondary Memory*
(or files). Secondary memory is not erased when the power is turned
off. Or in the case of a USB flash drive, the data we write from our
programs can be removed from the system and transported to another
system.

We will primarily focus on reading and writing text files such as those
we create in a text editor. Later we will see how to work with database
files which are binary files, specifically designed to be read and
written through database software.

.. mchoice:: file-persistence-mc-work
    :answer_a: Main Memory
    :answer_b: Secondary Memory
    :answer_c: Central Processing Unit
    :answer_d: Primary Memory
    :correct: b
    :feedback_a: What type of hardware are files?
    :feedback_b: This chapter focuses on files which is a part of secondary memory.
    :feedback_c: What type of hardware are files?
    :feedback_d: What type of hardware are files?

    Which piece of hardware are we working with in this chapter?
