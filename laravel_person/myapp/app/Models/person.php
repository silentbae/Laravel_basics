<?php

namespace App\Models;

use Illuminate\Http\Request;
use Image, Validator, DB, File, Redirect, Response, Config, ResponseManager, URL, App ;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\address;
use App\Models\phone;
use App\Models\conf_contact_number_type;
use App\Models\documents;
use App\Models\conf_document_types;



class person extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'person';
    protected $primaryKey = 'person_id';
    protected $fillable = [
    	'person_id',
        'first_name',
        'last_name',
        'email'
    ];
    public function getAddress(){
        return $this->hasMany(
            address::class,
           'person_id',
           'person_id',
        );
    }
    public function getPhone(){
        return $this->hasMany(
            phone::class,
           'person_id',
           'person_id',
        );

    }
    public function getDocuments(){
        return $this->hasMany(
            documents::class,
           'person_id',
           'person_id',
        );
    }
    // public function getPhoneType(){
    //     return $this->hasMany(
    //         conf_contact_number_type::class,
    //        'contact_number_type_id',
    //        'contact_number_type_id',
    //     );
    // }


    public function scopeGetMyDetails($query){
        $my_data =  $query->with(['getPhone'=> function ($query){
            $query->leftjoin('conf_contact_number_type AS ccn',  'phone.contact_number_type_id','=', 'ccn.contact_number_type_id');
            $query->select('phone.person_id','phone.phone_id','phone.ph_number','ccn.contact_number_type_value');
            
            // join('phone', 'phone.phone_type', '=', 'conf_contact_number_type.contact_number_type_id');
            // ->get(['conf_contact_number_type
            // .contact_number_type_id']);

        },
        'getAddress'=> function ($query){
            $query->leftjoin('conf_address_type AS cat',  'address.address_type_id','=', 'cat.address_type_id');
            $query->select('address.person_id','address.address_id','address.house_name','address.location','address.land_mark','cat.address_type_value');
        },
        'getDocuments'=> function ($query){
            $query->leftjoin('conf_document_types AS cdt','documents.document_type_id','=','cdt.document_type_id');
            $query->select('documents.person_id','documents.document_name','cdt.document_type_value');
        },
        // 'getPhoneType'=> function ($query){
        //     $query->select('');
        //}


    ])
    ->select('person_id','first_name','last_name','email')
    ->get();
    //echo "bbbb";    
    return $my_data;
    // foreach($my_data as $person_data) 
    // {
                
    //     echo "Name-";
    //     print_r($person_data->first_name);
    //     print_r("\t");
    //     print_r($person_data->last_name);
    //     print_r("\n");
    //     echo "Email-";
    //     print_r($person_data->email);
    //     print_r("\n");
    //     foreach($person_data['getAddress'] as $address_data){
    //         echo "Address Type-";
    //         print_r($address_data->address_type_value);
    //         print_r("\n");
    //         echo "House Name-";
    //         print_r($address_data->house_name);
    //         print_r("\n");
    //         echo "Location-";
    //         print_r($address_data->location);
    //         print_r("\n");
    //         echo "Land Mark-";
    //         print_r($address_data->land_mark);
    //         print_r("\n");
    //    }
    //     foreach($person_data['getPhone'] as $ph_data){
    //         echo "Phone Type- ";
    //         print_r($ph_data->contact_number_type_value);
    //         print_r("\n");
    //         echo "Phone- ";
    //         print_r($ph_data->ph_number);
    //         print_r("\n");   
    //     }
    //     print_r("\n");
    // }
    // return  $my_data;
    }
}
