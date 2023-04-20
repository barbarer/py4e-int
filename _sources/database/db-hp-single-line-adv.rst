Advanced Practice Problems - Mixed-up Code
-----------------------------------------------------

Let's practice what we have learned about SQL.

.. hparsons:: db-adv-hp-get-and-p1
    :language: sql
    :randomize:
    :blockanswer: 0 1 2 3 4 5

    In the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png

    Create a SELECT statement to retrieve the ``student_id``, ``test_name``,
    and ``english`` for all entries whose ``english`` value is lower than 60 and ``math`` value is higher than 90.
    ~~~~
    --blocks--
    SELECT
    student_id, test_name, english
    FROM
    grades
    WHERE
    english < 60 AND math > 90
    english < 60 & math > 90
    GET
    TABLE


.. hparsons:: db-adv-hp-change-p2
    :language: sql
    :randomize:
    :blockanswer: 0 1 2 3 4

    In the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png

    A student completed an extra assignment and got some additional points.

    Create an UPDATE statement to change the entry with a ``student_id`` of 1 and set the math score for the ``test_name`` of ``final`` to 90.
    ~~~~
    --blocks--
    UPDATE grades
    SET
    math = 90
    WHERE
    student_id = 1 AND test_name = "final"
    LET
    student_id = 1 AND test_name = final
    CHANGE grades



.. hparsons:: db-adv-hp-update-p3
    :language: sql
    :randomize:
    :blockanswer: 0 1 2 3 4 5

    In the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png

    One test was too difficult so the instructors decided to give everyone extra points.

    Create an UPDATE statement to add 10 points to the ``english`` score
    of the entries with a ``test_name`` of ``midterm``
    ~~~~
    --blocks--
    UPDATE
    grades
    SET
    english = english + 10
    WHERE
    test_name = "midterm"
    test_name == "midterm"
    WHEN


.. hparsons:: db-adv-hp-select-p4
    :language: sql
    :randomize:
    :blockanswer: 0 1 2 3 4

    In addition to the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png

    there is also a ``students`` table:

    .. image:: https://i.ibb.co/m4KxSMC/practice-students.png

    Create a SELECT statement with a JOIN to: select the ``test_name`` and ``math``
    from the ``grades``  table and ``name`` from the ``students`` table, where the ``student_id``
    in the ``grades`` table is the same as the ``id`` in the ``students`` table.
    ~~~~
    --blocks--
    SELECT
    grades.test_name, grades.math, students.name
    FROM grades
    JOIN students
    ON students.id = grades.student_id
    ON students.id = grades.id
    WITH students
    GET


.. hparsons:: db-adv-hp-select-p5
    :language: sql
    :randomize:
    :blockanswer: 0 1 2 3 4 5 6

    In addition to the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png

    there is also a ``students`` table:

    .. image:: https://i.ibb.co/KVTGNXh/practice-tests.png

    Create a SELECT statement with a JOIN to: select the ``date`` and ``name``
    from the ``tests``  table and ``student_id`` from the ``grades`` table,
    where the ``test_name`` in the ``grades`` table is the same as the ``name``
    in the ``tests`` table.
    ~~~~
    --blocks--
    SELECT
    tests.date, tests.name, grades.student_id
    FROM tests
    JOIN
    grades
    ON
    grades.test_name = tests.name
    date, name, student_id
    JOIN ON
