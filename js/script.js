(function() {
    jQuery(function() {
        this.film_rolls || (this.film_rolls = []);
        this.film_rolls['demo'] = new FilmRoll({
            container: '#demo',
        });
        return true;
    });
}).call(this);