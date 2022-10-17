<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\person;
use App\Models\address;


class ControllerPerson extends Controller
{
    
    function index()
    {  
        $data = person::GetMyDetails();
        return response()->json([
          'status' => 200,
          'message' => '',
          'data' =>$data
      ]);
    }
    function addPerson(Request $request){
        echo "Person received"; 
        $person = new person;
        $person_id  = $request->input('person_id');
        $first_name = $request->input('first_name');
        $last_name  = $request->input('last_name');
        $email = $request->input('email');

          return person::create([
            'person_id' => $person_id,
            'first_name' =>$first_name,
            'last_name' =>$last_name,
            'email' =>$email,
          ]);
    }
    function addAddress(Request $request){
        echo "Address received"; 
        $address = new address;
        $address_id  = $request->input('address_id');
        $location = $request->input('location');
        $land_mark  = $request->input('land_mark');
        $person_id = $request->input('person_id');
        $address_type_id = $request->input('address_type_id');
          return person::create([
            'address_id' => $address_id,
            'location' => $location,
            'land_mark' => $land_mark,
            'person_id' => $person_id,
            'address_type_id' => $address_type_id,                     
          ]);
    }
}
