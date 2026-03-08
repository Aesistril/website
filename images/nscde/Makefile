.PHONY: build

PYTHON := python

BACKDROPS := $(wildcard backdrops/*.pm)
PALETTES  := $(wildcard palettes/*.dp)

BACKDROP_NAMES := $(basename $(notdir $(BACKDROPS)))
PALETTE_NAMES  := $(basename $(notdir $(PALETTES)))

OUTPUTS := $(foreach b,$(BACKDROP_NAMES),\
           $(foreach p,$(PALETTE_NAMES),compiled_bg/$(b)_$(p).png))

build: $(OUTPUTS)

compiled_bg:
	mkdir -p compiled_bg

compiled_bg/%.png: | compiled_bg
	b=$$(echo $* | cut -d_ -f1); \
	p=$$(echo $* | cut -d_ -f2); \
	$(PYTHON) palette_colorgen.py -p palettes/$$p.dp -n 8 -i backdrops/$$b.pm -P 1 -b | \
	magick - $@

clean:
	rm -rf compiled_bg