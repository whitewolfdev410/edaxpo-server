import {Container, Card} from "@/Components/Page/Container";


export default function SearchPage (props: any) {
    return (
        <Container>
            <div className="flex gap-4 flex-row mt-8">
                <Card className="w-[250px]">
                    Ricerca qui
                </Card>
                <div className="flex-1">
                    <h2>XX Risultati</h2>
                    <Card>
                        Risultato 1
                    </Card>
                </div>
            </div>
        </Container>
    )
}
