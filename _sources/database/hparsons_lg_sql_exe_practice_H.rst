Practice Problems - Mixed-up Code
-----------------------------------------------------

Now, let's spend 15 minutes to practice what we just learned!

**Please do not refer back to the previous page or outside resources.**

You can stop working on a problem after you worked
on it for about three minutes without solving it.

Problems
==============

.. hparsons:: hparsons_lg_sql_exe_practice_1_hp
    :language: sql
    :randomize:

    In the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png
    
    Please write a SELECT statement to retrieve the ``student_id``, ``test_name``,
    and ``english`` of all entries whose ``english`` is lower than 60 and ``math`` is higher than 90.
    ~~~~
    --hiddenprefix--
    DROP TABLE IF EXISTS grades;
    create table "grades" ("student_id" INTEGER, "test_name" TEXT, "english" INTEGER, "math" INTEGER);
    INSERT INTO grades (student_id,test_name,english,math) VALUES
        ('1', 'midterm', 62, 84),
        ('1', 'final', 70, 86),
        ('2', 'midterm', 50, 95),
        ('2', 'final', 80, 99),
        ('3', 'midterm', 55, 91);
    --blocks--
    SELECT
    student_id, test_name, english
    FROM
    grades
    WHERE
    english < 60 AND math > 90
    english < 60 & math > 90
    --unittest--
    assert 0,0 == 2
    assert 0,1 == midterm
    assert 1,0 == 3
    assert 1,1 == midterm
  

.. hparsons:: hparsons_lg_sql_exe_practice_2_hp
    :language: sql
    :randomize:

    In the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png
    
    A student completed an extra assignment and got some additional points. 

    Please write an UPDATE statement to change the entry whose ``student_id`` is 1, and set their ``math`` score to 90 in the ``final`` test (``test_name`` column).
    ~~~~
    --hiddenprefix--
    DROP TABLE IF EXISTS grades;
    create table "grades" ("student_id" INTEGER, "test_name" TEXT, "english" INTEGER, "math" INTEGER);
    INSERT INTO grades (student_id,test_name,english,math) VALUES
        ('1', 'midterm', 62, 84),
        ('1', 'final', 70, 86),
        ('2', 'midterm', 50, 95),
        ('2', 'final', 80, 99),
        ('3', 'midterm', 55, 91);
    --blocks--
    UPDATE grades
    SET
    math = 90
    WHERE
    student_id = 1 AND test_name = "final"
    LET
    student_id = 1 AND test_name = final
    --hiddensuffix--
    SELECT * FROM grades;
    --unittest--
    assert 1,1 == final
    assert 1,3 == 90
    assert 3,3 == 99


.. hparsons:: hparsons_lg_sql_exe_practice_3_hp
    :language: sql
    :randomize:

    In the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png
    
    The instructors decided to add some points to all students as one test was too difficult.

    Please write an UPDATE statement to change all entries whose ``test_name`` is ``midterm``,
    and add 10 points to their ``english`` score.
    ~~~~
    --hiddenprefix--
    DROP TABLE IF EXISTS grades;
    create table "grades" ("student_id" INTEGER, "test_name" TEXT, "english" INTEGER, "math" INTEGER);
    INSERT INTO grades (student_id,test_name,english,math) VALUES
        ('1', 'midterm', 62, 84),
        ('1', 'final', 70, 86),
        ('2', 'midterm', 50, 95),
        ('2', 'final', 80, 99),
        ('3', 'midterm', 55, 91);
    --blocks--
    UPDATE
    grades
    SET
    english = english + 10
    WHERE
    test_name = "midterm"
    english + 10
    --hiddensuffix--
    SELECT * FROM grades 
    --unittest--
    assert 0,2 == 72
    assert 1,2 == 70
    assert 2,2 == 60
    assert 3,2 == 80
    assert 4,2 == 65


.. hparsons:: hparsons_lg_sql_exe_practice_4_hp
    :language: sql
    :randomize:

    Aside from the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png

    We also have a ``students`` table:
    
    .. image:: https://i.ibb.co/m4KxSMC/practice-students.png
    
    Now we want to match the student name to their math grades.

    Please write a statement using SELECT and JOIN to: select the ``test_name`` and ``math``
    from the ``grades``  table and ``name`` from the ``students`` table, where the ``student_id``
    in the ``grades`` table is the same as the ``id`` in the ``students`` table.
    ~~~~
    --hiddenprefix--
    DROP TABLE IF EXISTS grades;
    create table "grades" ("student_id" INTEGER, "test_name" TEXT, "english" INTEGER, "math" INTEGER);
    INSERT INTO grades (student_id,test_name,english,math) VALUES
        ('1', 'midterm', 62, 84),
        ('1', 'final', 70, 86),
        ('2', 'midterm', 50, 95),
        ('2', 'final', 80, 99),
        ('3', 'midterm', 55, 91);
    DROP TABLE IF EXISTS students;
    create table "students" ("id" INTEGER, "name" TEXT);
    INSERT INTO students (id,name) VALUES
        (1, 'Alex'),
        (2, 'Blake'),
        (3, 'Charlie');
    --blocks--
    SELECT
    grades.test_name, grades.math, students.name
    FROM grades
    JOIN students
    ON students.id = grades.student_id
    ON students.id = grades.id
    --unittest--
    assert 0,2 == Alex
    assert 3,2 == Blake


.. hparsons:: hparsons_lg_sql_exe_practice_5_hp
    :language: sql
    :randomize:

    Aside from the ``grades`` table:

    .. image:: https://i.ibb.co/r6qShy5/practice-grade.png

    We also have a ``tests`` table:
    
    .. image:: https://i.ibb.co/KVTGNXh/practice-tests.png
    
    Now we want to add the date information to the grades to see when the students took the tests.

    Please write a statement using SELECT and JOIN to: select the ``date`` and ``name``
    from the ``tests``  table and ``student_id`` from the ``grades`` table,
    where the ``test_name`` in the ``grades`` table is the same as the ``name`` in the ``tests`` table.
    ~~~~
    --hiddenprefix--
    DROP TABLE IF EXISTS grades;
    create table "grades" ("student_id" INTEGER, "test_name" TEXT, "english" INTEGER, "math" INTEGER);
    INSERT INTO grades (student_id,test_name,english,math) VALUES
        ('1', 'midterm', 62, 84),
        ('1', 'final', 70, 86),
        ('2', 'midterm', 50, 95),
        ('2', 'final', 80, 99),
        ('3', 'midterm', 55, 91);
    DROP TABLE IF EXISTS tests;
    create table "tests" ("name" TEXT, "date" DATE);
    INSERT INTO tests (name,date) VALUES
        ('midterm', '2022-10-15'),
        ('final', '2022-11-13');
    --blocks--
    SELECT
    tests.date, tests.name, grades.student_id
    FROM tests
    JOIN
    grades
    ON
    grades.test_name = tests.name
    --unittest--
    assert 0,0 == 2022-10-15
    assert 0,1 == midterm
    assert 0,2 == 1



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
        a.href = "hparsons_lg_sql_exe_posttest.html"

        // get prev set cookie
        var EXP_COOKIE = 'hparsons_lg_sql_230330'
        var cond = getCookie(EXP_COOKIE);
        if (cond == 'wr') {
          window.location.href = "hparsons_lg_sql_exe_practice_W.html";
        }
      };

    </script>
