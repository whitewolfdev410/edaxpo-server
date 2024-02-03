@extends('site-layout')

@section('content')
    <div class="max-w-screen-lg mx-auto">
        @include('partials.placeholder')
        <div class="border border-gray-100 p-4 mt-4 shadow rounded-lg">
            <div role="tablist" class="tabs tabs-lifted tabs-lg">
                <a role="tab" class="tab">Moto</a>
                <a role="tab" class="tab tab-active">Ricambi</a>
            </div>
            <form action="/search" method="get">
                <div class="grid grid-cols-3 gap-4 mt-4">
                    <input name="field1" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input name="field1" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input name="field1" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input name="field1" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input name="field1" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <button type="submit" class="btn btn-primary">Cerca</button>
                </div>
            </form>
        </div>
        <div class="grid grid-cols-4 gap-4 my-8">
            @foreach([1,2,3,4] as $item)
                @include('partials.product-box', ['item' => $item])
            @endforeach
        </div>
    </div>
@endsection
