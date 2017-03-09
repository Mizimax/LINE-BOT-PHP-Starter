<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
    	$products = DB::table('products')->get();
    	return $products;
    }
    public function show($search){
    	if(ctype_digit($search)){
    		$product = DB::table('products')->where('product_id', $search)->get();
    	}
    	else{
    		$product = DB::table('products')->where('product_name', 'like', '%'.$search.'%')->orWhere('product_detail', 'like', '%'.$search.'%')->get();
    	}
    	return $product;
    }
}
