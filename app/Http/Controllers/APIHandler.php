<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

use Inertia\Inertia;
//This class is activated on the routes /companyprofile and /companyquote
class APIHandler extends Controller
{
    //this function handles the Company Profile API

    
    public function getProfile(Request $request){
        //value is from submitted form
        //can only use request class when it is a POST request
        $symbol = $request->profileSym; 
       

        //guzzlehttp class enables easy use of basic REST apis
        //request value is inserted into the api
        $req = Http::get('https://financialmodelingprep.com/api/v3/profile/'.$symbol.'?apikey=rjtxIVjGarzsucbadQiUQSZ2igNCPoZq');
        //decodes JSON response into much more readable format
        $res = json_decode($req->body());
        //if there was a response from the http request
        //this code will run
        if($res) {
        //access the instance, and assign to more workable variable
        $data = $res[0]; 
        //return the finance table component, passing through the api data and relevant title
        return Inertia::render('FinanceTable', [
            'data' => $data, 
            'title' => 'Company Profile',

        ]);
        }
        //if there is no response, it will return the NoMatch component
        return Inertia::render('NoMatch', [
            'message' => 'No Matching Company Found!', 
        ]);
    }
    //this function handles the Company Quote API
    //follows identical structure to the above function
    public function getQuote(Request $request){
        $symbol = $request->quoteSym;

        $req = Http::get('https://financialmodelingprep.com/api/v3/quote/'.$symbol.'?apikey=rjtxIVjGarzsucbadQiUQSZ2igNCPoZq');
        $res = json_decode($req->body());
        
        if($res) {
        $data = $res[0]; 
        return Inertia::render('FinanceTable', [
            'data' => $data, 
            'title' => 'Company Stock Quote',
        ]);
        }
        return Inertia::render('NoMatch', [
            'message' => 'No Matching Company Found!', 
        ]);

    }
}
