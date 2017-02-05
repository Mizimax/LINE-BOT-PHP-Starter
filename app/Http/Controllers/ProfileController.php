<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
	public $maxza = [];
    function getProfile($id){
    	$this->maxza[$id] = (int)$id;
    	return  $this->maxza;
    }
    function getAllProfile(){
    	return $this->maxza;
    }
}
