﻿<?xml version="1.0" ?><xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"><xsl:output method="text" indent="no"/><xsl:template match="/data"><![CDATA[Changes to your Building Control Application ]]><xsl:choose><xsl:when test="bsr_buildingcontrolapplication/bsr_bcaareferencenumber"><xsl:value-of select="bsr_buildingcontrolapplication/bsr_bcaareferencenumber" /></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose></xsl:template></xsl:stylesheet>