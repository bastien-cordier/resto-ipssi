<?php
namespace Core\Trait;

trait JsonTrait {

    /**
     * Envoie les informations au format json
     *
     * @param mixed $data
     * @param integer $responseCode
     * @return 
     */
    public function jsonResponse (mixed $data, int $responseCode)
    {
        header("Content-type: application/json");
        http_response_code($responseCode);

        if( is_object($data)){
            echo json_decode($data());
            return true;
        }

        if( is_array($data)){
            foreach($data as $key => $value){
                if(is_object($value)){
                    $data[$key] = $value();
                }
            }
        }

        echo json_encode($data);
    }
}