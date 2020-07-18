<?php

namespace App\API;

class ApiMessage {
    
    public static function returnMessage($message, $code){
        return [
            'data' => [
                'msg' => $message,
                'code' => $code, // it could be an internal code from the API instead of receiving the parameter. In this case the API codes should be documented
            ]
        ];
    }

}