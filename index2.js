/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var mySelect = document.getElementById("mySelect");
var daftar = document.getElementById("daftar");
var no_antrian1 = document.getElementById("no_antrian1");
var tanggal = document.getElementById("tanggal");
var jam = document.getElementById("jam");
var nama = document.getElementById("nama");
var simpan = document.getElementById("simpan");
var catatan = document.getElementById("catatan");
function submitClick()
{
    let dbCountPath = "/DatabaseUsersCount/" + "count"
    var current_value = current_value + 1;
    function (current_value) {
        return (current_value || 0) + 1;
    };
    var firebaseRef = firebase.database().ref();
     
    var messageText = nama.value;
    var jamsekarang = jam.value;
    var pilihan = mySelect.value;
    var reg = daftar.value;
    var antrian = no_antrian1.value;
    var date = tanggal.value;
    var save = simpan.value;
    var keluhan = catatan.value;
    
    firebaseRef.child("Pilihan Kota").set(pilihan);
    firebaseRef.child("Nama").set(messageText);
    firebaseRef.child("Jam").set(jamsekarang);
    firebaseRef.child("No Antrian").set(antrian);
    firebaseRef.child("Tanggal").set(date);
    firebaseRef.child("Keluhan").set(keluhan);
    firebaseRef.child("BARU").set("START");
}
var app = {
    // Application Constructor
    initialize: function() {r
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();