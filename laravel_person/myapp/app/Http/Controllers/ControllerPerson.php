<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\person;
use App\Models\address;
use App\Models\documents;



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
    function getId(person $person)
    {  
        $data = person::GetMyDetails.find();
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
    function fileUpload(Request $request){
      $request->validate([
        'file' => 'required|mimes:csv,txt,xlx,xls,pdf|max:2048'
        ]);
      $fileModel = new documents;
      if( $request->file()){
        $fileName = time().'_'. $request->file->getClientOriginalName();
        $filePath = $request->file('file')->storeAs('uploads', $fileName, 'public');
        $fileModel->document_name = time().'_'.$fileName;
        // $fileModel->document_id = $request->input('document_id');
        $fileModel->person_id = $request->input('person_id');
        $fileModel->document_type_id = $request->input('document_type');
        $fileModel->upload_date = $request->input('upload_date');
        $fileModel->expiry_date = $request->input('expiry_date');
        // $fileModel->created_at = $request->input('created_at');  
        $fileModel->save();
        return back();
      }
  }
}