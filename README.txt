https://medium.com/spatial-data-science/cloud-optimized-geotiff-cog-with-python-8e0a22b884c5
https://github.com/DHI-GRAS/terracotta
https://frodriguezsanchez.net/post/accessing-data-from-large-online-rasters-with-cloud-optimized-geotiff-gdal-and-terra-r-package/
https://terracotta-python.readthedocs.io/en/latest/tutorials/aws.html

terracotta command

cd tile_server
terracotta ingest ./cwu_data/optimized/{name}_{year}.tif -o total_db.sqlite
terracotta ingest ./yield_data/optimized/{name}_{}_{year}.tif -o total_db.sqlite
terracotta serve -d total_db.sqlite
