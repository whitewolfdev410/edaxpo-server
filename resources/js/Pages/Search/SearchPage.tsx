import {Container, Card} from "@/Components/Page/Container";
import {SearchProvider, useSearchContext} from "@/Pages/Search/SearchContext";

function SearchContent () {
    const {data} = useSearchContext()
    return (
        <Container>
            <div className="flex gap-4 flex-row mt-4">
                <Card className="w-[250px]">
                    Ricerca qui
                </Card>
                <div className="flex-1">
                    <h2 className="my-2">{data?.["hydra:totalItems"]} Risultati</h2>
                    {data?.["hydra:member"].map((item, index) => {
                        return (
                            <Card key={item.id} className="mb-4">
                                <div className="flex flex-row gap-8">
                                    <div className="w-[266px]">
                                        <img src={item.cover} alt={item.name} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </Container>
    )
}

export default function SearchPage () {
    return (
        <SearchProvider>
            <SearchContent />
        </SearchProvider>
    )
}
