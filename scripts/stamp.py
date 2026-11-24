#!/usr/bin/env python3
"""Stamp the Horror Aesthetic signature on an image: python3 scripts/stamp.py in.png out.webp [width_ratio]"""
import sys
from PIL import Image
src,dst=sys.argv[1],sys.argv[2];r=float(sys.argv[3]) if len(sys.argv)>3 else 0.30
im=Image.open(src).convert('RGBA');s=Image.open(__file__.rsplit('/',2)[0]+'/img/brand/signature.png').convert('RGBA')
w=int(im.width*r);h=int(s.height*w/s.width);s=s.resize((w,h),Image.LANCZOS)
im.alpha_composite(s,((im.width-w)//2,im.height-h-int(im.height*0.025)));im.convert('RGB').save(dst,quality=88)
