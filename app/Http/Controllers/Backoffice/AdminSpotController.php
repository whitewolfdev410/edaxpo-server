<?php
namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Spot;
use App\Services\Crud\CollectionPaginator;
use App\Services\Crud\CollectionPaginatorOptions;
use Illuminate\Http\Request;

class AdminSpotController extends Controller
{
    public function items(
        Request $request,
        CollectionPaginator $collectionPaginator
    ): array {
        $options = new CollectionPaginatorOptions(Spot::class);
        $options->itemsPerPage = $request->input('itemsPerPage', 10);
        $options->page = $request->input('page', 1);
        return $collectionPaginator->toArray($options);
    }

}
