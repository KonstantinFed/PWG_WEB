var arr = [{ 'name' : 'is_logging_file', 'link' : 'is_logging_file.html' }, 
{ 'name' : 'is_logging_console', 'link' : 'is_logging_console.html' }, 
{ 'name' : 'log_file', 'link' : 'log_file.html' }, 
{ 'name' : 'binary_search_iterations', 'link' : 'binary_search_iterations.html' }, 
{ 'name' : 'seed', 'link' : 'seed.html' }, 
{ 'name' : 'size', 'link' : 'size.html' }, 
{ 'name' : 'macro_chunck_size', 'link' : 'macro_chunck_size.html' }, 
{ 'name' : 'micro_chunck_size', 'link' : 'micro_chunck_size.html' }, 
{ 'name' : 'water_ratio', 'link' : 'water_ratio.html' }, 
{ 'name' : 'basis_surface', 'link' : 'basis_surface.html' }, 
{ 'name' : 'basis_distortion', 'link' : 'basis_distortion.html' }, 
{ 'name' : 'basis_align', 'link' : 'basis_align.html' }, 
{ 'name' : 'basis_key_point', 'link' : 'basis_key_point.html' }, 
{ 'name' : 'basis_height', 'link' : 'basis_height.html' }, 
{ 'name' : 'mountains_count', 'link' : 'mountains_count.html' }, 
{ 'name' : 'mountains_noises_count', 'link' : 'mountains_noises_count.html' }, 
{ 'name' : 'mountains_gradient_type', 'link' : 'mountains_gradient_type.html' }, 
{ 'name' : 'mountains_hillside_type', 'link' : 'mountains_hillside_type.html' }, 
{ 'name' : 'mountains_align', 'link' : 'mountains_align.html' }, 
{ 'name' : 'mountains_height', 'link' : 'mountains_height.html' }, 
{ 'name' : 'mountains_size', 'link' : 'mountains_size.html' }, 
{ 'name' : 'rivers_count', 'link' : 'rivers_count.html' }, 
{ 'name' : 'rivers_smooth_radius', 'link' : 'rivers_smooth_radius.html' }, 
{ 'name' : 'rivers_max_length', 'link' : 'rivers_max_length.html' }, 
{ 'name' : 'rivers_distortion', 'link' : 'rivers_distortion.html' }, 
{ 'name' : 'rivers_channel_width', 'link' : 'rivers_channel_width.html' }, 
{ 'name' : 'rivers_channel_depth', 'link' : 'rivers_channel_depth.html' }, 
{ 'name' : 'rivers_bump_add_coef', 'link' : 'rivers_bump_add_coef.html' }, 
{ 'name' : 'textures_enable', 'link' : 'textures_enable.html' }, 
{ 'name' : 'macro_texture_enable', 'link' : 'macro_texture_enable.html' }, 
{ 'name' : 'normal_map_enable', 'link' : 'normal_map_enable.html' }, 
{ 'name' : 'normal_map_coef', 'link' : 'normal_map_coef.html' }, 
{ 'name' : 'texture_splatting_deep', 'link' : 'texture_splatting_deep.html' }, 
{ 'name' : 'texture_splatting_bandwidth', 'link' : 'texture_splatting_bandwidth.html' }, 
{ 'name' : 'macro_texture_tile_size', 'link' : 'macro_texture_tile_size.html' }, 
{ 'name' : 'texture_mountain', 'link' : 'texture_mountain.html' }, 
{ 'name' : 'texture_basis', 'link' : 'texture_basis.html' }, 
{ 'name' : 'texture_channel', 'link' : 'texture_channel.html' }, 
{ 'name' : 'texture_sea', 'link' : 'texture_sea.html' }, 
{ 'name' : 'models_enable', 'link' : 'models_enable.html' }, 
{ 'name' : 'models_create_chunks', 'link' : 'models_create_chunks.html' }, 
{ 'name' : 'models_create_complex', 'link' : 'models_create_complex.html' }, 
{ 'name' : 'models_add_texture_coords', 'link' : 'models_add_texture_coords.html' }, 
{ 'name' : 'models_add_normals', 'link' : 'models_add_normals.html' }, 
{ 'name' : 'models_edge_size', 'link' : 'models_edge_size.html' }, 
{ 'name' : 'models_map_height', 'link' : 'models_map_height.html' }, 
];var input = document.querySelector('#search_input');
var messages = document.querySelector('#search_messages');
input.addEventListener('input', Search);
input.addEventListener('focusin', Search);
input.addEventListener('focusout', Deselect);
messages.addEventListener('mouseenter', function() { mouse_in_search=true; });
messages.addEventListener('mouseleave', function() { mouse_in_search=false; });

function Search()
{
  messages.textContent = '';
  var i = 0; 
  var cur_len = 0; 
  var max_len = 3; 
  var max_letters = 16; 
  var substring = input.value; 
  if(substring == '') {
    messages.style.visibility='hidden';
    return;
  }
  while (i < arr.length && cur_len < max_len ) { 
    var info = arr[i];
    var string = info.name;
    if(string !== undefined) {
      if(string.includes(substring)) {
        if(string.length > max_letters) {
          string = string.substring(0, max_letters);
          string += '...';
        }
        $('<a>',{
          text: string + '\n',
          href: info.link}).appendTo($('#search_messages'));
        cur_len++; 
      } 
    }
  i++; 
  }
  if(cur_len > 0)
    messages.style.visibility='visible';
  else 
    messages.style.visibility='hidden';
};

function Deselect()
{
  if(!mouse_in_search) {
    messages.textContent = '';
    messages.style.visibility='hidden';
  }
};