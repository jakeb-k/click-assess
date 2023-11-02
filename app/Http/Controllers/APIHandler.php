<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class APIHandler extends Controller
{
    public function getProfile(){
        $symbol = 'AMD'; 
       
        $res = Http::get('https://financialmodelingprep.com/api/v3/profile/'.$symbol.'?apikey=rjtxIVjGarzsucbadQiUQSZ2igNCPoZq');
        dd($res->body());
    }
    public function getQuote(){
        $symbol = 'AMD';

        $res = Http::get('https://financialmodelingprep.com/api/v3/quote/'.$symbol.'?apikey=rjtxIVjGarzsucbadQiUQSZ2igNCPoZq');
        dd($res->body());

    }
}
