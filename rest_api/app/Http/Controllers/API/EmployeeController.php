<?php

namespace App\Http\Controllers\API;

use \App\Employee;
use \App\API\ApiMessage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{

    /**
    * @var Employee
    */
    private $employee;


    // Constructor with an instance of Employee
    public function __construct(Employee $employee){
        $this->employee = $employee;
    }

    // return a collection of all employees in json format
    public function index() {
                
        return response()->json($this->employee->paginate(10), 200);
    }

    // return a single employee with the specifyed id , if it exists
    public function show($id){

        $employee = $this->employee->find($id);

        if(! $employee) return response()->json(
            ApiMessage::returnMessage('No employee with id = ' . $id . ' was found', 204), 
            204 // code 204 = no content on success request
        ); 

        $companies = $employee->companies;

        $data = [ 'data' => $employee ];

        return response()->json($data, 200); // code 200 = success
    }

    // creates a new employee
    public function store(Request $request) {

        try {
            $employeeData = $request->all();

            $this->employee->create($employeeData);

            return response()->json(
                ApiMessage::returnMessage('Success creating the employee', 201), 
                201
            ); // code 201 = success on creating resource

        } catch (\Exception $e) {
            if(config('app.debug')) {
                return response()->json(
                    ApiMessage::returnMessage($e->getMessage(), 500), 
                    500
                ); //code 500 = server side error
            }

            return response()->json(
                ApiMessage::returnMessage('There was an error while creating the record', 500), 
                500
            ); //code 500 = server side error
        
        }
    }

    // updates the employee with id = {id}
    public function update(Request $request, $id) {

        try {
            $employeeData = $request->all();

            $employee = $this->employee->find($id);
            $employee->update($employeeData);

            return response()->json(
                ApiMessage::returnMessage('Success updating the employee', 201), 
                201); // code 201 = success on creating resource
        } catch (\Exception $e) {
            if(config('app.debug')) {
                return response()->json(
                    ApiMessage::returnMessage($e->getMessage(), 500), 
                    500); //code 500 = server side error
            }

            return response()->json(
                ApiMessage::returnMessage('There was an error while updating the record', 500), 
                500); //code 500 = server side error
        
        }
    }

    // deletes the employee with id = {id}
    public function delete(Employee $id){
        try {

            $id->delete();
            
            return response()->json(
                ApiMessage::returnMessage('Employee ' . $id->name . ' was removed.', 200),
                200
            );

        } catch (\Exception $e){
            if(config('app.debug')) {
                return response()->json(
                    ApiMessage::returnMessage($e->getMessage(), 500), 
                    500
                ); //code 500 = server side error
            }

            return response()->json(
                ApiMessage::returnMessage('There was an error while removing the record', 500), 
                500
            ); //code 500 = server side error
        }
    }
}
