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
        Schema::create('form_configuration', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('label');
            $table->string('type');
            $table->string('default')->nullable();
            $table->string('value');
            $table->boolean('required')->default(false);
            $table->string('class')->default('col-6');
            $table->string('showOnValue')->nullable();
            $table->integer('group')->default(0);
            $table->integer('score')->default(1);
            $table->string('description')->nullable();
            $table->string('info')->nullable();
            $table->string('spot_type');
            $table->string('ordern')->nullable();
            $table->string('min')->number()->nullable();
            $table->string('max')->number()->nullable();
        });
        DB::table('form_configuration')->insert(
            array(
                array('id' => '1','name' => 'model','label' => 'Scrivi il tuo modello di moto','type' => 'autocomplete','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '0','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '1','min' => '0','max' => NULL),
                array('id' => '2','name' => 'usage','label' => 'Il tuo veicolo è','type' => 'radio','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '0','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '2','min' => '0','max' => NULL),
                array('id' => '3','name' => 'image','label' => '','type' => 'image','default' => NULL,'value' => '','required' => '0','class' => 'col-6 m-auto','showOnValue' => NULL,'group' => '0','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '3','min' => '0','max' => NULL),
                array('id' => '4','name' => 'status','label' => 'Incidentata','type' => 'radio','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '0','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '4','min' => '0','max' => NULL),
                array('id' => '5','name' => 'price','label' => 'Prezzo','type' => 'currency','default' => '1.0','value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '1','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '5','min' => '0','max' => NULL),
                array('id' => '6','name' => 'vat','label' => 'Più iva','type' => 'radio','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '1','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '6','min' => '0','max' => NULL),
                array('id' => '7','name' => 'images','label' => 'Foto - 0/10 - Puoi aggiungere fino a 10 foto','type' => 'dropzone','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '1','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '7','min' => '0','max' => NULL),
                array('id' => '8','name' => 'video','label' => 'Video','type' => 'video','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '1','score' => '1','description' => 'Aggiungi un video dove illustri la moto che hai messo in vendita ad un potenziale Cliente aumentando così del 20% la possibilità di vendita! Durata massima: 30 secondi (dimensione massima: 50','info' => NULL,'spot_type' => 'moto','ordern' => '8','min' => '0','max' => NULL),
                array('id' => '9','name' => 'description','label' => 'Descrizione','type' => 'textarea','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '0','score' => '1','description' => 'Racconta qualcosa della tua moto in questo campo di testo libero; utilizzando bene il campo Descrizione potrai fornire maggiori dettagli sulle condizioni e le caratteristiche del tuo veicolo.','info' => NULL,'spot_type' => 'moto','ordern' => '9','min' => '0','max' => NULL),
                array('id' => '10','name' => 'chassis','label' => 'Telaio','type' => 'text','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '2','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '10','min' => '0','max' => NULL),
                array('id' => '11','name' => 'license_plate','label' => 'Targa','type' => 'text','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '2','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '11','min' => '0','max' => NULL),
                array('id' => '12','name' => 'warranty','label' => 'Moto in garanzia?','type' => 'radio','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '2','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '12','min' => '0','max' => NULL),
                array('id' => '13','name' => 'law','label' => 'Normativa antinquinamento','type' => 'select','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '2','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '13','min' => '0','max' => NULL),
                array('id' => '14','name' => 'accessories','label' => 'Accessori','type' => 'select','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '2','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '14','min' => '0','max' => NULL),
                array('id' => '15','name' => 'features','label' => 'Altre caratteristiche','type' => 'select','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '2','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '15','min' => '0','max' => NULL),
                array('id' => '16','name' => 'main_color','label' => 'Colore primario','type' => 'select','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '2','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '16','min' => '0','max' => NULL),
                array('id' => '17','name' => 'secondary_color','label' => 'Colore secondario','type' => 'select','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '2','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '17','min' => '0','max' => NULL),
                array('id' => '18','name' => 'metal_color','label' => 'Metallizzato','type' => 'radio','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '2','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '18','min' => '0','max' => NULL),
                array('id' => '19','name' => 'front_wear','label' => 'Usura pneumatico primario','type' => 'select','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '2','score' => '1','description' => NULL,'info' => 'Info su come calcolare % usura gomma','spot_type' => 'moto','ordern' => '19','min' => '0','max' => NULL),
                array('id' => '20','name' => 'rear_wear','label' => 'Usura pneumatico posteriore','type' => 'select','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '2','score' => '1','description' => NULL,'info' => 'Info su come calcolare % usura gomma','spot_type' => 'moto','ordern' => '20','min' => '0','max' => NULL),
                array('id' => '21','name' => 'general','label' => 'Condizioni generali','type' => 'select','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '2','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '21','min' => '0','max' => NULL),
                array('id' => '22','name' => 'country','label' => 'Nazione','type' => 'map','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '3','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '22','min' => '0','max' => NULL),
                array('id' => '23','name' => 'region','label' => 'Regione','type' => 'select','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '3','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '23','min' => '0','max' => NULL),
                array('id' => '24','name' => 'cap','label' => 'Cap','type' => 'select','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '3','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '24','min' => '0','max' => NULL),
                array('id' => '25','name' => 'city','label' => 'Città','type' => 'select','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '3','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '25','min' => '0','max' => NULL),
                array('id' => '26','name' => 'province','label' => 'Provincia','type' => 'select','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '3','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '26','min' => '0','max' => NULL),
                array('id' => '27','name' => 'payment_method','label' => 'Che modalità di pagamento accetti?','type' => 'checkbox','default' => NULL,'value' => '','required' => '0','class' => 'col-6','showOnValue' => NULL,'group' => '4','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '27','min' => '0','max' => NULL),
                array('id' => '28','name' => 'contact','label' => 'Persona di riferimento','type' => 'text','default' => NULL,'value' => '','required' => '0','class' => 'col-4','showOnValue' => NULL,'group' => '4','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '28','min' => '0','max' => NULL),
                array('id' => '29','name' => 'prefix','label' => 'Prefisso','type' => 'select','default' => NULL,'value' => '','required' => '0','class' => 'col-4','showOnValue' => NULL,'group' => '4','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '29','min' => '0','max' => NULL),
                array('id' => '30','name' => 'phone','label' => 'N. Telefono','type' => 'text','default' => NULL,'value' => '','required' => '0','class' => 'col-4','showOnValue' => NULL,'group' => '4','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '30','min' => '0','max' => NULL),
                array('id' => '31','name' => 'showNumber','label' => 'Vuoi che il tuo annuncio sia visibile anche all\'estero?','type' => 'radio','default' => NULL,'value' => '','required' => '0','class' => 'col-4','showOnValue' => NULL,'group' => '4','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '31','min' => '0','max' => NULL),
                array('id' => '32','name' => 'showSpotInCountries','label' => 'Vuoi che il tuo annuncio sia visibile anche all\'estero?','type' => 'radio','default' => NULL,'value' => '','required' => '0','class' => 'col-4','showOnValue' => NULL,'group' => '4','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '32','min' => '0','max' => NULL),
                array('id' => '33','name' => 'showDealersBid','label' => 'Vuoi ricevere offerte d\'acquisto dai Dealer senza l\'obbligo di acquisto di un\'altra moto?','type' => 'radio','default' => NULL,'value' => '','required' => '0','class' => 'col-4','showOnValue' => NULL,'group' => '4','score' => '1','description' => NULL,'info' => NULL,'spot_type' => 'moto','ordern' => '33','min' => '0','max' => NULL)
              )
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('form_configuration_table', function (Blueprint $table) {
            //
        });
    }
};