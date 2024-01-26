<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\Crud\CollectionPaginator;
use App\Services\Crud\CollectionPaginatorOptions;
use App\Services\Crud\ItemProvider;
use App\Services\Crud\ItemProviderOptions;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    public function items(Request $request, CollectionPaginator $collectionPaginator) {
        $options = new CollectionPaginatorOptions(User::class);
        $options->itemsPerPage = $request->input('itemsPerPage', 10);
        $options->page = $request->input('page', 1);
        return $collectionPaginator->toArray($options);
    }

    public function item($id, ItemProvider $itemProvider) {
        return $itemProvider->byId($id, new ItemProviderOptions(User::class));
    }

    public function patchItem(Request $request, $id)
    {
        $data = $request->all();
        $user = User::find($id);
        $user->fill($data);
        $user->save();
        return new JsonResponse($user);
    }

    public function deleteItem($id)
    {
        $user = User::find($id);
        $user->delete();
        return new JsonResponse($user);
    }

    public function create(Request $request)
    {
        $data = $request->all();
        $user = new User();
        $data['password'] = !empty($data['password']) ? bcrypt($data['password']) : "";
        $user->fill($data);
        $user->save();
        return new JsonResponse($user);
    }

}
