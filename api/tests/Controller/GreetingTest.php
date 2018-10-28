<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

class GreetingTest extends WebTestCase
{
    public function testItShouldGetGreetings()
    {
        $client = static::createClient();
        $client->request('GET', '/greetings');
        $this->assertEquals(
            Response::HTTP_OK,
            $client->getResponse()->getStatusCode()
        );
    }
}
