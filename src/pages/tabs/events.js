import Head from "next/head";
import {
  Container,
  Heading,
  Link,
  ListItem,
  UnorderedList,
  Card, 
  Text,
  CardHeader, 
  CardBody, 
  CardFooter
} from "@chakra-ui/react";
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function DisplayEvents({eventMap}) {
    return (
        <Container>
            <Head>
                <title>Events</title>
                <Heading as="h1" size="lg">
                    Events
                </Heading>
                <UnorderedList>
                    {eventMap.map((event) => {
                        <h1>This is an event</h1>
                        return (
                            <ListItem>
                                <Card>
                                    <CardBody>
                                        <Text>{event.name}</Text>
                                            <Text>Start Date/Time: {event.startDate}</Text>
                                        <Text>End Date/Time: {event.endDate}</Text>
                                    </CardBody>
                                </Card>
                            </ListItem>
                        )
                    })}
                </UnorderedList>
            </Head>
        </Container>
    );
}




export async function getServerSideProps(){
    const eventMap = await prisma.event.findMany({
        select : { name : true, startDate : true, endDate : true }
    });

    return {props: {eventMap: JSON.parse(JSON.stringify(eventMap))}};
}