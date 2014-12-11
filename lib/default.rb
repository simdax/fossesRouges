# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.

require 'nokogiri'

def embedded_svg filename, options={}
  file = File.read(File.join('images', filename))
  doc = Nokogiri::HTML::DocumentFragment.parse file
  svg = doc.at_css 'svg'
  doc.to_html
end

def lienYoutube it
  
  tmp=it.sub("watch?v=", "embed/")
  #tmp=tmp.gsub("https:","")
  tmp << "?rel=0" 
end

def audio it
  
  tmp="/audio/"+it

end
