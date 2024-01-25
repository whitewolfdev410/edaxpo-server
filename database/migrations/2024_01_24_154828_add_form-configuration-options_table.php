<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('form_configuration_options', function (Blueprint $table) {
            $table->id();
            $table->integer('form_configuration_id');
            $table->string('name');
            $table->string('value');
            $table->boolean('checked');
        });

        DB::table('form_configuration_options')->insert(
            array(
                array('id' => '1','form_configuration_id' => '2','name' => 'Nuovo','value' => 'Nuovo','checked' => '0'),
                array('id' => '2','form_configuration_id' => '2','name' => 'Usato','value' => 'Usato','checked' => '1'),
                array('id' => '3','form_configuration_id' => '2','name' => 'Km zero','value' => 'Km zero','checked' => '0'),
                array('id' => '4','form_configuration_id' => '2','name' => 'Test drive','value' => 'Test drive','checked' => '0'),
                array('id' => '5','form_configuration_id' => '4','name' => 'No','value' => 'No','checked' => '1'),
                array('id' => '6','form_configuration_id' => '4','name' => 'Si','value' => 'Si','checked' => '0'),
                array('id' => '7','form_configuration_id' => '6','name' => 'No','value' => 'No','checked' => '1'),
                array('id' => '8','form_configuration_id' => '6','name' => 'Si','value' => 'Si','checked' => '0'),
                array('id' => '9','form_configuration_id' => '12','name' => 'No','value' => 'No','checked' => '1'),
                array('id' => '10','form_configuration_id' => '12','name' => 'Si','value' => 'Si','checked' => '0'),
                array('id' => '11','form_configuration_id' => '13','name' => 'Zero emissioni','value' => 'Zero emissioni','checked' => '0'),
                array('id' => '12','form_configuration_id' => '13','name' => 'Euro 0','value' => 'Euro 0','checked' => '0'),
                array('id' => '13','form_configuration_id' => '13','name' => 'Euro 1','value' => 'Euro 1','checked' => '0'),
                array('id' => '14','form_configuration_id' => '13','name' => 'Euro 2','value' => 'Euro 2','checked' => '0'),
                array('id' => '15','form_configuration_id' => '13','name' => 'Euro 3','value' => 'Euro 3','checked' => '0'),
                array('id' => '16','form_configuration_id' => '13','name' => 'Euro 4','value' => 'Euro 4','checked' => '0'),
                array('id' => '17','form_configuration_id' => '13','name' => 'Euro 5','value' => 'Euro 5','checked' => '0'),
                array('id' => '18','form_configuration_id' => '16','name' => 'Arancione','value' => '#ff7500','checked' => '0'),
                array('id' => '19','form_configuration_id' => '16','name' => 'Argento','value' => '#dcdcdc','checked' => '0'),
                array('id' => '20','form_configuration_id' => '16','name' => 'Bianco','value' => '#ffffff','checked' => '0'),
                array('id' => '21','form_configuration_id' => '16','name' => 'Blu/Azzurro','value' => '#0059b2','checked' => '0'),
                array('id' => '22','form_configuration_id' => '16','name' => 'Giallo','value' => '#f7c81e','checked' => '0'),
                array('id' => '23','form_configuration_id' => '16','name' => 'Grigio','value' => '#949494','checked' => '0'),
                array('id' => '24','form_configuration_id' => '16','name' => 'Nero','value' => '#000000','checked' => '0'),
                array('id' => '25','form_configuration_id' => '16','name' => 'Oro','value' => '#d9a600','checked' => '0'),
                array('id' => '26','form_configuration_id' => '16','name' => 'Rosso','value' => '#d91a2a','checked' => '0'),
                array('id' => '27','form_configuration_id' => '16','name' => 'Verde','value' => '#38a614','checked' => '0'),
                array('id' => '28','form_configuration_id' => '16','name' => 'Lilla','value' => '#c8a2c8','checked' => '0'),
                array('id' => '29','form_configuration_id' => '16','name' => 'Bronzo','value' => '#bf7326','checked' => '0'),
                array('id' => '30','form_configuration_id' => '16','name' => 'Marrone','value' => '#994200','checked' => '0'),
                array('id' => '31','form_configuration_id' => '16','name' => 'Rosa','value' => '#ff69b4','checked' => '0'),
                array('id' => '32','form_configuration_id' => '17','name' => 'Arancione','value' => '#ff7500','checked' => '0'),
                array('id' => '33','form_configuration_id' => '17','name' => 'Argento','value' => '#dcdcdc','checked' => '0'),
                array('id' => '34','form_configuration_id' => '17','name' => 'Bianco','value' => '#ffffff','checked' => '0'),
                array('id' => '35','form_configuration_id' => '17','name' => 'Blu/Azzurro','value' => '#0059b2','checked' => '0'),
                array('id' => '36','form_configuration_id' => '17','name' => 'Giallo','value' => '#f7c81e','checked' => '0'),
                array('id' => '37','form_configuration_id' => '17','name' => 'Grigio','value' => '#949494','checked' => '0'),
                array('id' => '38','form_configuration_id' => '17','name' => 'Nero','value' => '#000000','checked' => '0'),
                array('id' => '39','form_configuration_id' => '17','name' => 'Oro','value' => '#d9a600','checked' => '0'),
                array('id' => '40','form_configuration_id' => '17','name' => 'Rosso','value' => '#d91a2a','checked' => '0'),
                array('id' => '41','form_configuration_id' => '17','name' => 'Verde','value' => '#38a614','checked' => '0'),
                array('id' => '42','form_configuration_id' => '17','name' => 'Lilla','value' => '#c8a2c8','checked' => '0'),
                array('id' => '43','form_configuration_id' => '17','name' => 'Bronzo','value' => '#bf7326','checked' => '0'),
                array('id' => '44','form_configuration_id' => '17','name' => 'Marrone','value' => '#994200','checked' => '0'),
                array('id' => '45','form_configuration_id' => '17','name' => 'Rosa','value' => '#ff69b4','checked' => '0'),
                array('id' => '46','form_configuration_id' => '18','name' => 'No','value' => 'No','checked' => '1'),
                array('id' => '47','form_configuration_id' => '18','name' => 'Si','value' => 'Si','checked' => '0'),
                array('id' => '48','form_configuration_id' => '19','name' => '10%','value' => '10','checked' => '0'),
                array('id' => '49','form_configuration_id' => '19','name' => '20%','value' => '20','checked' => '0'),
                array('id' => '50','form_configuration_id' => '19','name' => '30%','value' => '30','checked' => '0'),
                array('id' => '51','form_configuration_id' => '19','name' => '40%','value' => '40','checked' => '0'),
                array('id' => '52','form_configuration_id' => '19','name' => '50%','value' => '50','checked' => '0'),
                array('id' => '53','form_configuration_id' => '19','name' => '60%','value' => '60','checked' => '0'),
                array('id' => '54','form_configuration_id' => '19','name' => '70%','value' => '70','checked' => '0'),
                array('id' => '55','form_configuration_id' => '19','name' => '80%','value' => '80','checked' => '0'),
                array('id' => '56','form_configuration_id' => '19','name' => '90%','value' => '90','checked' => '0'),
                array('id' => '57','form_configuration_id' => '19','name' => '100%','value' => '100','checked' => '0'),
                array('id' => '58','form_configuration_id' => '20','name' => '10%','value' => '10','checked' => '0'),
                array('id' => '59','form_configuration_id' => '20','name' => '20%','value' => '20','checked' => '0'),
                array('id' => '60','form_configuration_id' => '20','name' => '30%','value' => '30','checked' => '0'),
                array('id' => '61','form_configuration_id' => '20','name' => '40%','value' => '40','checked' => '0'),
                array('id' => '62','form_configuration_id' => '20','name' => '50%','value' => '50','checked' => '0'),
                array('id' => '63','form_configuration_id' => '20','name' => '60%','value' => '60','checked' => '0'),
                array('id' => '64','form_configuration_id' => '20','name' => '70%','value' => '70','checked' => '0'),
                array('id' => '65','form_configuration_id' => '20','name' => '80%','value' => '80','checked' => '0'),
                array('id' => '66','form_configuration_id' => '20','name' => '90%','value' => '90','checked' => '0'),
                array('id' => '67','form_configuration_id' => '20','name' => '100%','value' => '100','checked' => '0'),
                array('id' => '68','form_configuration_id' => '21','name' => '90/100 - Ottime','value' => '0','checked' => '0'),
                array('id' => '69','form_configuration_id' => '21','name' => '80/89 - Buone','value' => '1','checked' => '0'),
                array('id' => '70','form_configuration_id' => '21','name' => '70/79 - Discrete','value' => '1','checked' => '0'),
                array('id' => '71','form_configuration_id' => '21','name' => '60/69 - Sufficenti','value' => '1','checked' => '0'),
                array('id' => '72','form_configuration_id' => '27','name' => 'Bonifico','value' => 'Bonifico','checked' => '0'),
                array('id' => '73','form_configuration_id' => '27','name' => 'Carta di credito','value' => 'Carta di credito','checked' => '0'),
                array('id' => '74','form_configuration_id' => '27','name' => 'Contanti','value' => 'Contanti','checked' => '0'),
                array('id' => '75','form_configuration_id' => '27','name' => 'Contrassegno','value' => 'Contrassegno','checked' => '0'),
                array('id' => '76','form_configuration_id' => '27','name' => 'Paypal','value' => 'Paypal','checked' => '0'),
                array('id' => '77','form_configuration_id' => '29','name' => '+39','value' => '+39','checked' => '0'),
                array('id' => '78','form_configuration_id' => '31','name' => 'Si','value' => 'Si','checked' => '0'),
                array('id' => '79','form_configuration_id' => '31','name' => 'No','value' => 'No','checked' => '0'),
                array('id' => '80','form_configuration_id' => '32','name' => 'Si','value' => 'Si','checked' => '0'),
                array('id' => '81','form_configuration_id' => '32','name' => 'No','value' => 'No','checked' => '0'),
                array('id' => '82','form_configuration_id' => '33','name' => 'Si','value' => 'Si','checked' => '0'),
                array('id' => '83','form_configuration_id' => '33','name' => 'No','value' => 'No','checked' => '0')
              )
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('form-configuration-options', function (Blueprint $table) {
            //
        });
    }
};