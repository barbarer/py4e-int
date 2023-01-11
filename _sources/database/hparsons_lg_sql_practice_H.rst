Practice Problems - Mixed-up Code
-----------------------------------------------------

Now, let's spend 15 minutes to practice what we just learned!

**Please do not refer back to the previous page or outside resources.**

You can stop working on a problem after you worked
on it for about three minutes without solving it.

Problems
==============

.. hparsons:: hparsons_lg_sql_practice_1_hp
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


.. hparsons:: hparsons_lg_sql_practice_2_hp
    :language: sql
    :randomize:
    :blockanswer: 0 1 2 3 4

    In the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png

    A student completed an extra assignment and got some additional points.

    Please write an UPDATE statement to change the entry whose ``student_id`` is 1, and set their math score for ``final`` ``test_name`` to 90.
    ~~~~
    --blocks--
    UPDATE grades
    SET
    math = 90
    WHERE
    student_id = 1 AND test_name = "final"
    LET
    student_id = 1 AND test_name = final



.. hparsons:: hparsons_lg_sql_practice_3_hp
    :language: sql
    :randomize:
    :blockanswer: 0 1 2 3 4 5

    In the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png

    The instructors decided to add some points to all students as one test was too difficult.

    Please write an UPDATE statement to change all entries whose ``test_name`` is ``midterm``,
    and add 10 points to their ``english`` score.
    ~~~~
    --blocks--
    UPDATE
    grades
    SET
    english = english + 10
    WHERE
    test_name = "midterm"
    english + 10


.. hparsons:: hparsons_lg_sql_practice_4_hp
    :language: sql
    :randomize:
    :blockanswer: 0 1 2 3 4

    Aside from the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png

    We also have a ``students`` table:

    .. image:: https://i.ibb.co/m4KxSMC/practice-students.png

    Now we want to match the student name to their math grades.

    Please write a statement using SELECT and JOIN to: select the ``test_name`` and ``math``
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


.. hparsons:: hparsons_lg_sql_practice_5_hp
    :language: sql
    :randomize:
    :blockanswer: 0 1 2 3 4 5 6

    Aside from the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png

    We also have a ``tests`` table:

    .. image:: https://i.ibb.co/KVTGNXh/practice-tests.png

    Now we want to add the date information to the grades to see when the students took the tests.

    Please write a statement using SELECT and JOIN to: select the ``date`` and ``name``
    from the ``tests``  table and ``student_id`` from the ``grades`` table,
    where the ``test_name`` in the ``grades`` table is the same as the ``name`` in the ``tests`` table.
    ~~~~
    --blocks--
    SELECT
    tests.date, tests.name, grades.student_id
    FROM tests
    JOIN
    grades
    ON
    grades.test_name = tests.name


What to do next
============================
.. raw:: html

    <p>Click on the following link to go to the post test: <b><a id="hparsons_lg_sql_posttest"><font size="+2">Post Test</font></a></b></p>

.. raw:: html

    <style>
        .drag-area{
            height: auto !important;
            min-height: 42px;
        }
        .drop-area{
            height: auto !important;
            min-height: 42px;
        }
    </style>


    <script type="text/javascript" >

      function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
            }
        }
        return "";
      }

      window.onload = function() {

        a = document.getElementById("hparsons_lg_sql_posttest")
        a.href = "hparsons_lg_sql_posttest.html"

        // get prev set cookie
        var EXP_COOKIE = 'hparsons_lg_sql_221115'
        var cond = getCookie(EXP_COOKIE);
        if (cond == 'wr') {
          window.location.href = "hparsons_lg_sql_practice_W.html";
        }
      };

    </script>
