<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

use Inertia\Inertia;

class APIHandler extends Controller
{
    public function getProfile(Request $request){
        $symbol = $request->profileSym; 
       
        $req = Http::get('https://financialmodelingprep.com/api/v3/profile/'.$symbol.'?apikey=rjtxIVjGarzsucbadQiUQSZ2igNCPoZq');
        $res = json_decode($req->body());
        if($res) {
        $data = $res[0]; 
        return Inertia::render('FinanceTable', [
            'data' => $data, 
            'title' => 'Company Profile',

        ]);
        }
        return Inertia::render('NoMatch', [
            'message' => 'No Matching Company Found!', 
        ]);
    }
    public function getQuote(Request $request){
        $symbol = $request->quoteSym;

        $req = Http::get('https://financialmodelingprep.com/api/v3/quote/'.$symbol.'?apikey=rjtxIVjGarzsucbadQiUQSZ2igNCPoZq');
        $res = json_decode($req->body());
        $data = $res[0]; 
        if($res[0]) {
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
