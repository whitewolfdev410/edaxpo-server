<?php
namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\Spot;
use App\Models\User;
use App\Services\Crud\CollectionPaginator;
use App\Services\Crud\CollectionPaginatorOptions;
use App\Services\Crud\ItemProvider;
use App\Services\Crud\ItemProviderOptions;
use Illuminate\Http\JsonResponse;
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
    ) {
        $options = new ItemProviderOptions(Spot::class);
        return $itemProvider->byId($request->id, $options);
    }

    public function patchItem(
        Request $request,
        ItemProvider $itemProvider,
    ) {
        $options = new ItemProviderOptions(Spot::class);
        $item =  $itemProvider->byId($request->id, $options);
        $data = $request->all();

        $item->fill($data);
        $item->save();
        return $item;
    }

    public function deleteItem(
        Request $request,
        ItemProvider $itemProvider,
    ) {
        $options = new ItemProviderOptions(Spot::class);
        $item =  $itemProvider->byId($request->id, $options);
        $item->delete();
        return $item;
    }

}
