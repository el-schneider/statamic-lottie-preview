<?php

namespace ElSchneider\StatamicLottiePreview\Tests;

use ElSchneider\StatamicLottiePreview\ServiceProvider;
use Statamic\Testing\AddonTestCase;

abstract class TestCase extends AddonTestCase
{
    protected string $addonServiceProvider = ServiceProvider::class;
}
