indexing
	component:   "openEHR Data Types"

	description: "[
			 Implementation of DV_CUSTOMARY_QUANTITY. Quantified data items
			 which are not naturally expressed as a {value, units} tuple, but 
			 instead in some non-systematic way. Time is the main example, but
			 most imperial weights and lengths are also customary rather than 
			 scientific quantities.
			 ]"
	keywords:    "quantity, data"

	design:      "openEHR Data Types Reference Model 1.7"

	author:      "Thomas Beale"
	support:     "Ocean Informatics <support@OceanInformatics.biz>"
	copyright:   "Copyright (c) 2000-2004 The openEHR Foundation <http://www.openEHR.org>"
	license:     "See notice at bottom of class"

	file:        "$Source: C:/project/openehr/spec-dev/architecture/computable/eiffel/rm/data_types/quantity/SCCS/s.dv_customary_quantity.e $"
	revision:    "$Revision: 1.3 $"
	last_change: "$Date: 04/03/10 10:26:39+10:00 $"

deferred class DV_CUSTOMARY_QUANTITY

inherit
	DV_QUANTIFIED

feature -- Definitions

	Canonical_units: STRING is "s"

feature -- Access

	units: STRING is
			-- units is "s"
		once
			create Result.make(0)
			Result.append(Canonical_units)
		end

feature -- Conversion

	to_quantity: DV_QUANTITY is
			-- convert to a scientific quantity
		deferred
		end

invariant
	Units_valid: units.is_equal("s")
			
end


--|
--| ***** BEGIN LICENSE BLOCK *****
--| Version: MPL 1.1/GPL 2.0/LGPL 2.1
--|
--| The contents of this file are subject to the Mozilla Public License Version
--| 1.1 (the 'License'); you may not use this file except in compliance with
--| the License. You may obtain a copy of the License at
--| http://www.mozilla.org/MPL/
--|
--| Software distributed under the License is distributed on an 'AS IS' basis,
--| WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
--| for the specific language governing rights and limitations under the
--| License.
--|
--| The Original Code is dv_customary_quantity.e.
--|
--| The Initial Developer of the Original Code is Thomas Beale.
--| Portions created by the Initial Developer are Copyright (C) 2003-2004
--| the Initial Developer. All Rights Reserved.
--|
--| Contributor(s):
--|
--| Alternatively, the contents of this file may be used under the terms of
--| either the GNU General Public License Version 2 or later (the 'GPL'), or
--| the GNU Lesser General Public License Version 2.1 or later (the 'LGPL'),
--| in which case the provisions of the GPL or the LGPL are applicable instead
--| of those above. If you wish to allow use of your version of this file only
--| under the terms of either the GPL or the LGPL, and not to allow others to
--| use your version of this file under the terms of the MPL, indicate your
--| decision by deleting the provisions above and replace them with the notice
--| and other provisions required by the GPL or the LGPL. If you do not delete
--| the provisions above, a recipient may use your version of this file under
--| the terms of any one of the MPL, the GPL or the LGPL.
--|
--| ***** END LICENSE BLOCK *****
--|
