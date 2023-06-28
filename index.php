<?php

use Symfony\Bridge\Twig\Command\DebugCommand;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;
use Twig\Extension\DebugExtension;

require_once __DIR__ . '/vendor/autoload.php';

$loader = new FilesystemLoader(__DIR__. '/templates');
$twig = new Environment($loader, ['debug'=>true]);
$twig->addExtension(new DebugExtension);
echo $twig->render('index.html');