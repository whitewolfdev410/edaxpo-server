<?php
namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\Spot;
use App\Services\Crud\CollectionPaginator;
use App\Services\Crud\CollectionPaginatorOptions;
use App\Services\Crud\ItemProvider;
use App\Services\Crud\ItemProviderOptions;
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

    public function item(
        Request $request,
        ItemProvider $itemProvider,
    ): array {
        $options = new ItemProviderOptions(Spot::class);
        return $itemProvider->byId($request->id, $options);
    }

}
