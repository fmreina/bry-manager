<?php

namespace App\Http\Controllers\API;

use \App\Company;
use \App\API\ApiMessage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    /**
    * @var Company
    */
    private $company;


    // Constructor with an instance of Employee
    public function __construct(Company $company){
        $this->company = $company;
    }

    // return a collection of all stored companies
    public function index(){
        
        return response()->json($this->company->paginate(10), 200); // code 200 = success
    }

    // return a single company with the specifyed id, if it exists
    public function show($id){

        $company = $this->company->find($id);

        if(! $company) return response()->json(
            ApiMessage::returnMessage('There is no company with id = ' . $id, 204),
            204 // code 204 = no content on success request
        );

        $employees = $company->employees;

        $data = [ 'data' => $company ];
        
        return response()->json($data, 200); // code 200 =  success
    }

    // creates a new commpany
    public function store(Request $request) {

        try{
            $companyData = $request->all();

            $this->company->create($companyData);

            return response()->json(
                ApiMessage::returnMessage('A company was created successfully', 201),
                201 // code 201 = success on creating resource
            );

        } catch ( \Exception $e ){
            if(config('app.debug')){
                return response()->json(
                    ApiMessage::returnMessage($e->getMessage(), 500),
                    500 // code 500 = server side error
                );
            }

            return response()->json(
                ApiMessage::returnMessage('There was an error while creating a new company', 500),
                500 // code 500 = server side error
            );
        }
    }

    // updates the company with id = {id}
    public function update(Request $request, $id) {

        try{
            $companyData = $request->all();

            $company = $this->company->find($id);
            $company->update($companyData);

            return response()->json(
                ApiMessage::returnMessage('The company information was updated successfully', 201),
                201 // code 201 = success on creating resource
            );

        } catch ( \Exception $e ){
            if(config('app.debug')){
                return response()->json(
                    ApiMessage::returnMessage($e->getMessage(), 500),
                    500 // code 500 = server side error
                );
            }

            return response()->json(
                ApiMessage::returnMessage('There was an error while updating the company ' . $company->name, 500),
                500 // code 500 = server side error
            );
        }
    }

    // deletes the company with id = {id}, if it exists
    public function delete(Company $id) {

        try{
            
            $id->delete();

            return response()->json(
                ApiMessage::returnMessage('The company ' . $id->name . ' was deleted', 200),
                200 // code 200 = success
            );

        } catch ( \Exception $e ){
            if(config('app.debug')){
                return response()->json(
                    ApiMessage::returnMessage($e->getMessage(), 500),
                    500 // code 500 = server side error
                );
            }

            return response()->json(
                ApiMessage::returnMessage('There was an error while updating the company ' . $company->name, 500),
                500 // code 500 = server side error
            );
        }
    }
}
