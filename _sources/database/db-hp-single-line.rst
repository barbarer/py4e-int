Practice Problems - Mixed-up Code
-----------------------------------------------------

Let's practice what we have learned about SQL.


.. hparsons:: hparsons_test
    :language: sql
    :randomize:
    :blockanswer: 0 1 2 3 4 5

    In the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png

    Please write a SELECT statement to retrieve the ``student_id``, ``test_name``,
    and ``english`` of all entries whose ``english`` is lower than 60 and ``math`` is higher than 90.
    ~~~~
    --blocks--
    SELECT
    student_id, test_name, english
    FROM
    grades
    WHERE
    english < 60 AND math > 90
    english < 60 & math > 90

.. hparsons:: db-hp-get-and-p1
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


.. hparsons:: db-hp-change-p2
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



.. hparsons:: db-hp-update-p3
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


.. hparsons:: db-hp-insert-p4
    :language: sql
    :randomize:
    :blockanswer: 0 1 2 3 4

    Create an INSERT statement to add a new entry to the ``grades`` table.
    Set the ``student_id`` to 4, ``test_name`` to "midterm" ,
    ``english`` score to 90 and ``math`` score to 95.
    ~~~~
    --blocks--
    INSERT
    INTO
    grades
    (student_id, test_name, english, math)
    VALUES
    (4, "midterm", 90, 95)
    ("4", "midterm", "90", "95")
    ("student_id", "test_name", "english", "math")
    "grades"


.. hparsons:: db-hp-create-table-p5
    :language: sql
    :randomize:
    :blockanswer: 0 1 2 3 4 5 6 7 8

    Create a ``CREATE TABLE`` statement to create a ``grades`` table with
    a ``student_id`` of type integer, a ``test_name`` of type text,
    an ``english`` score of type integer and a ``math`` score of type
    integer.
    ~~~~
    --blocks--
    CREATE
    TABLE
    grades
    (
    student_id INTEGER,
    test_name TEXT,
    english INTEGER,
    math INTEGER
    )
    test_name INTEGER,
