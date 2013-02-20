var app = angular.module('Faceboard', ['ngResource', 'ui'])


app.controller("QuizCtrl", function ($scope) {
    var people = [{"image": "jbaase.jpg", "male": true, "name": "James Baase"}, {"image": "ebackman.jpg", "male": false, "name": "Elise Backman"}, {"image": "abanful.jpg", "male": false, "name": "Akua Banful"}, {"image": "bauman.jpg", "male": true, "name": "Jared Bauman"}, {"image": "tbeaucha.jpg", "male": true, "name": "Tyler Beauchamp"}, {"image": "aebennet.jpg", "male": false, "name": "Annika Bennett"}, {"image": "bergsten.jpg", "male": false, "name": "Tova Bergsten"}, {"image": "kbest.jpg", "male": false, "name": "Kelsea Best"}, {"image": "mmbrady.jpg", "male": false, "name": "Maeve Brady"}, {"image": "wenyucao.jpg", "male": true, "name": "Wesley Cao"}, {"image": "rchao.jpg", "male": true, "name": "Ray Chao"}, {"image": "schar.jpg", "male": false, "name": "Stephanie Char"}, {"image": "ic.jpg", "male": false, "name": "Isabella Chen"}, {"image": "rcthree.jpg", "male": true, "name": "Richard Cheng"}, {"image": "echertko.jpg", "male": true, "name": "Eli Chertkov"}, {"image": "macisner.jpg", "male": true, "name": "Marcos Cisneros"}, {"image": "kkclifto.jpg", "male": false, "name": "Katherine Clifton"}, {"image": "scuneo.jpg", "male": false, "name": "Sarah Cuneo"}, {"image": "fdarnis.jpg", "male": true, "name": "Franklyn Darnis"}, {"image": "ldavey.jpg", "male": false, "name": "Lakshmi Davey"}, {"image": "ajdevine.jpg", "male": false, "name": "Amanda Devine"}, {"image": "cdube.jpg", "male": true, "name": "Conor Dube"}, {"image": "debanks.jpg", "male": true, "name": "Daniel Ebanks"}, {"image": "atel.jpg", "male": true, "name": "Alex El-Fakir"}, {"image": "jfairchi.jpg", "male": true, "name": "John Fairchild"}, {"image": "efalcon.jpg", "male": true, "name": "Eric Falcon"}, {"image": "dtfarley.jpg", "male": true, "name": "Dillon Farley"}, {"image": "jsferrar.jpg", "male": false, "name": "Jeanette  Ferrara"}, {"image": "aefield.jpg", "male": false, "name": "Anjalie Field"}, {"image": "ctfortin.jpg", "male": true, "name": "Charles Fortin"}, {"image": "mfunk.jpg", "male": false, "name": "Mary Funk"}, {"image": "jmgarlan.jpg", "male": true, "name": "Jared Garland"}, {"image": "julietg.jpg", "male": false, "name": "Juliet Garrett"}, {"image": "sgavis.jpg", "male": true, "name": "Sam Gavis-Hughson"}, {"image": "mgoren.jpg", "male": false, "name": "Maeli Goren"}, {"image": "snehag.jpg", "male": false, "name": "Sneha Goswami"}, {"image": "mhaake.jpg", "male": true, "name": "Matthew Haake"}, {"image": "nhakim.jpg", "male": false, "name": "Naimah Hakim"}, {"image": "jrhammer.jpg", "male": false, "name": "Julia Hammer"}, {"image": "rlhaynes.jpg", "male": false, "name": "Rebecca Haynes"}, {"image": "mherson.jpg", "male": true, "name": "Mason Herson-Hord"}, {"image": "chertz.jpg", "male": false, "name": "Caroline Hertz"}, {"image": "lhhoffma.jpg", "male": false, "name": "Lauren Hoffman"}, {"image": "meholmes.jpg", "male": false, "name": "Miriam Holmes"}, {"image": "bholt.jpg", "male": true, "name": "Brandon Holt"}, {"image": "khorvath.jpg", "male": false, "name": "Katherine Horvath"}, {"image": "sjemison.jpg", "male": false, "name": "Sarah Jemison"}, {"image": "mcjohnst.jpg", "male": true, "name": "Mitchell Johnston"}, {"image": "pkallis.jpg", "male": true, "name": "Peter Kallis"}, {"image": "skarp.jpg", "male": false, "name": "Stefani Karp"}, {"image": "skaseta.jpg", "male": false, "name": "Samantha Kaseta"}, {"image": "crkelley.jpg", "male": false, "name": "Claudia Kelley"}, {"image": "hannak.jpg", "male": false, "name": "Hanna  Kim "}, {"image": "ckolb.jpg", "male": true, "name": "Casey Kolb"}, {"image": "rlapp.jpg", "male": false, "name": "Rose Lapp"}, {"image": "slawal.jpg", "male": false, "name": "Oluwaseyi Lawal"}, {"image": "talee.jpg", "male": false, "name": "Tyler Lee"}, {"image": "naomilee.jpg", "male": false, "name": "Naomi Lee"}, {"image": "flin.jpg", "male": false, "name": "Frina Lin"}, {"image": "elinton.jpg", "male": true, "name": "Eliot Linton"}, {"image": "jtlis.jpg", "male": false, "name": "Jacqueline  Lis"}, {"image": "madhavan.jpg", "male": true, "name": "Nihar Madhavan"}, {"image": "dwmcdona.jpg", "male": true, "name": "Drew McDonald"}, {"image": "smcgue.jpg", "male": false, "name": "Shannon McGue"}, {"image": "mehra.jpg", "male": false, "name": "Aashna Mehra"}, {"image": "ahmin.jpg", "male": true, "name": "Andrew Min"}, {"image": "pmoon.jpg", "male": false, "name": "Po Wah Moon"}, {"image": "bsmoore.jpg", "male": true, "name": "Brian Moore"}, {"image": "aemorton.jpg", "male": false, "name": "Alexandra Morton"}, {"image": "vmosoti.jpg", "male": false, "name": "Vanessa Mosoti"}, {"image": "kmount.jpg", "male": false, "name": "Katherine Mount"}, {"image": "vmurti.jpg", "male": true, "name": "Vaidhyanath Murti"}, {"image": "rnarang.jpg", "male": true, "name": "Rishi Narang"}, {"image": "sanathan.jpg", "male": false, "name": "Shreya Nathan"}, {"image": "nistlund.jpg", "male": true, "name": "Carl Nist-Lund"}, {"image": "aryehnc.jpg", "male": true, "name": "Aryeh Nussbaum Cohen"}, {"image": "okwelogu.jpg", "male": false, "name": "Chukwunonso Okwelogu"}, {"image": "satyapal.jpg", "male": true, "name": "Satyajeet Pal"}, {"image": "aparrado.jpg", "male": true, "name": "Andres  Parrado"}, {"image": "trperez.jpg", "male": false, "name": "Tristan Perez"}, {"image": "mpinsky.jpg", "male": true, "name": "Michael Pinsky"}, {"image": "jpritcha.jpg", "male": false, "name": "Jane Pritchard"}, {"image": "mranka.jpg", "male": false, "name": "Medha  Ranka"}, {"image": "mrifai.jpg", "male": false, "name": "Mia Rifai"}, {"image": "srigizad.jpg", "male": false, "name": "Stephanie Rigizadeh"}, {"image": "jarobert.jpg", "male": true, "name": "Jake Robertson"}, {"image": "srohira.jpg", "male": true, "name": "Samir Rohira"}, {"image": "prounds.jpg", "male": true, "name": "Patrick Rounds"}, {"image": "aprubin.jpg", "male": false, "name": "Anna Rubin"}, {"image": "mlsaunde.jpg", "male": true, "name": "Matthew Saunders"}, {"image": "vsharma.jpg", "male": true, "name": "Varun Sharma"}, {"image": "kxshi.jpg", "male": true, "name": "Kevin Shi"}, {"image": "shoffner.jpg", "male": false, "name": "Suzanne Shoffner"}, {"image": "sigatapu.jpg", "male": true, "name": "Nikhilesh Sigatapu"}, {"image": "arstwo.jpg", "male": true, "name": "Alex Smith"}, {"image": "espiro.jpg", "male": true, "name": "Ezra Spiro"}, {"image": "cstedman.jpg", "male": true, "name": "Collin Stedman"}, {"image": "estrasni.jpg", "male": true, "name": "Evan Strasnick"}, {"image": "nsung.jpg", "male": true, "name": "Nag Hyun Sung"}, {"image": "zwaliji.jpg", "male": false, "name": "Zahra Waliji"}, {"image": "jdwalsh.jpg", "male": true, "name": "James Walsh"}, {"image": "wanitwat.jpg", "male": false, "name": "Parinda Wanitwat"}, {"image": "jlwhelch.jpg", "male": true, "name": "John Whelchel"}, {"image": "eewhitak.jpg", "male": false, "name": "Emily Whitaker"}, {"image": "ewoldenb.jpg", "male": false, "name": "Elana Woldenberg"}, {"image": "ywollste.jpg", "male": false, "name": "Yael Wollstein"}, {"image": "yyonas.jpg", "male": true, "name": "Yacob Yonas"}];
    $scope.people = people;
    var remaining_people = people.slice(0);

    var current_person_index = 0; 
    var current_male = false;
    var easy = true;

    $scope.current_person = ""; 
    $scope.current_image = ""; https://s3.amazonaws.com/faceboard/" + people[current_person_index]["image"];
    $scope.percentage = 0;
    $scope.correct = 0;
    $scope.wrong = 0;
    $scope.total = 0;

    $scope.hard_input = "";

    $scope.alert = "Welcome!";
    $scope.alert_msg = "Get started by clicking the correct name";
    $scope.alert_type = "info";


    var new_start = true;

    // var correct_index = Math.floor(Math.random()*num_buttons);
    var correct_index = 0;
    var num_buttons = 6;
    $scope.current_people = [];
    setup();

    $scope.getAlert = function() {
        return $scope.alert;
    }

    $scope.getAlertMsg = function() {
        return $scope.alert_msg;
    }

    $scope.getAlertType = function() {
        return $scope.alert_type;
    }

    $scope.getRemaining = function() {
        return remaining_people.length;
    }

    $scope.isEasy = function() {
        return easy;
    }

    $scope.$watch('hard_input', function() {
        if ($scope.hard_input != "") {
            if ($scope.hard_input == $scope.current_person) {
                $scope.alert = "Correct!";
                $scope.alert_type = "success";
                $scope.alert_msg = "Great job!";
                $scope.correct += 1;
            }
            else {
                $scope.alert = "Nope!";
                $scope.alert_type = "error";
                $scope.alert_msg = "The correct name was " + $scope.current_person;
                $scope.wrong +=1;
            }
            $scope.total += 1;
            $scope.percentage = Math.round($scope.correct/$scope.total*100);

            if (remaining_people.length == 0) {
                window.alert("Finished with " + $scope.percentage + "% correct");
                reset();
            }

            setup();
            remaining_people.splice(current_person_index, 1);
            }
    });

    $scope.answer = function(index) {
        if (index == correct_index) {
            $scope.alert = "Correct!";
            $scope.alert_type = "success";
            $scope.alert_msg = "Great job!";
            $scope.correct += 1;
        }
        else {
            $scope.alert = "Nope!";
            $scope.alert_type = "error";
            $scope.alert_msg = "The correct name was " + $scope.current_person;
            $scope.wrong +=1;
        }

        $scope.total += 1;
        $scope.percentage = Math.round($scope.correct/$scope.total*100);

        if (remaining_people.length == 0) {
            window.alert("Finished with " + $scope.percentage + "% correct");
            reset();
        }

        setup();
        remaining_people.splice(current_person_index, 1);
    }

    function reset() {
        remaining_people = people.slice(0);

        $scope.percentage = 0;
        $scope.correct = 0;
        $scope.wrong = 0;
        $scope.total = 0;

        var alert = "Welcome!";
        var alert_msg = "Get started by clicking the correct name";
        var alert_type = "info";

    }

    $scope.getImage = function() {
        return $scope.current_image;
    }

    $scope.changeDiff = function(value) {
        reset();
        setup();
        if (value == "easy") {
            easy = true;
        }
        else {
            easy = false;
        }
    }

    function setup() {

        $scope.current_people = [];

        //Define shown/correct person
        current_person_index = Math.floor(Math.random()*remaining_people.length);
        $scope.current_person = remaining_people[current_person_index]["name"];
        $scope.current_image = "https://s3.amazonaws.com/faceboard/" + remaining_people[current_person_index]["image"];
        current_male = remaining_people[current_person_index]["male"];
        //What slot are they?
        correct_index = Math.floor(Math.random()*num_buttons);

        var rand_people = [];
        for (var i =0; i < num_buttons; i++) {
            if (i==correct_index) {
                $scope.current_people.push(remaining_people[current_person_index]);
                // console.log("X Current index " + current_person_index);
            }
            else {
                var rand_person_index = Math.floor(Math.random()*people.length);
                while ((people[rand_person_index]["name"] == remaining_people[current_person_index]["name"]) || (people[rand_person_index]["male"] != current_male) || (people.indexOf(rand_person_index) > -1)) {
                    rand_person_index = Math.floor(Math.random()*people.length);
                }
                rand_people.push[rand_person_index];
                // console.log("Rand index = " + rand_person_index + " -- Current index " + current_person_index);
                $scope.current_people.push(people[rand_person_index]);
            }
        }

    }

});
